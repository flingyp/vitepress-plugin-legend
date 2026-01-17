import MarkdownIt from 'markdown-it';
import fs from 'fs';
import path from 'path';
import { VitepressInfographicPreviewOptions } from '../index';

const customComponentRegex1 = /<PreviewInfographicPath\s*(.*?)\s*\/>/g;
const customComponentRegex2 =
  /<PreviewInfographicPath\s*(.*?)><\/PreviewInfographicPath>/g;

function extractPath(attrsStr: string): string {
  const pathMatch = /path=['"](.*?)['"]/.exec(attrsStr);
  return pathMatch ? pathMatch[1] : '';
}

function processTag(
  attrsStr: string,
  env: { path: string },
  options: VitepressInfographicPreviewOptions,
) {
  try {
    const showToolbar =
      /\bshowToolbar\b/i.test(attrsStr) || options.showToolbar;

    const filePath = extractPath(attrsStr);
    let fileContent = '';

    let basePath = '';
    if (env && env.path) {
      basePath = path.dirname(env.path);
    } else if (process.cwd) {
      basePath = process.cwd();
    }

    if (!filePath) {
      if (env && env.path) {
        try {
          fileContent = fs.readFileSync(env.path, 'utf-8');
        } catch (err) {
          console.error(`无法读取当前文件: ${env.path}`, err);
          fileContent = `# 文件读取失败\n\n无法加载: 当前文档`;
        }
      } else {
        fileContent = `# 文件读取失败\n\n未指定 path，且无法获取当前文档路径`;
      }
    } else {
      const fullPath = path.resolve(basePath, filePath);
      try {
        fileContent = fs.readFileSync(fullPath, 'utf-8');

        if (!fileContent.trim()) {
          return `<div class="infographic-error">文件内容为空: ${filePath}</div>`;
        }
      } catch (err) {
        console.error(`无法读取文件: ${fullPath}`, err);
        return `<div class="infographic-error">无法加载文件: ${filePath}</div>`;
      }
    }

    return `
      <ClientOnly>
        <InfographicChart code="${encodeURIComponent(fileContent)}" showToolbar="${showToolbar ? '1' : '0'}" />
      </ClientOnly>
    `;
  } catch (error) {
    console.error('处理 PreviewInfographicPath 组件时出错:', error);
    return `<div class="infographic-error">加载信息图失败</div>`;
  }
}

export function parseInfographicComponent(
  md: MarkdownIt,
  options: VitepressInfographicPreviewOptions = {},
) {
  const originalRender = md.render;
  md.render = function (src, env) {
    let result = originalRender.call(this, src, env);

    result = result.replace(customComponentRegex1, (match, attrsStr) => {
      return processTag(attrsStr, env, options);
    });

    result = result.replace(customComponentRegex2, (match, attrsStr) => {
      return processTag(attrsStr, env, options);
    });

    return result;
  };
}
