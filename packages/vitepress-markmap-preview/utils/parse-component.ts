import MarkdownIt from 'markdown-it';
import fs from 'fs';
import path from 'path';
import { VitepressMarkmapPreviewOptions } from 'index';
import { parseMarkmapConfig, removeFrontmatter } from './parse-config';

// 添加自定义容器解析，用于处理 <PreviewMarkmapPath> 标签
const customComponentRegex1 = /<PreviewMarkmapPath\s*(.*?)\s*\/>/g; // 自闭合标签，允许无属性
const customComponentRegex2 =
  /<PreviewMarkmapPath\s*(.*?)><\/PreviewMarkmapPath>/g; // 双标签，允许无属性

// 从属性字符串中提取路径
function extractPath(attrsStr: string): string {
  const pathMatch = /path=['"](.*?)['"]/.exec(attrsStr);
  return pathMatch ? pathMatch[1] : '';
}

// 1. 自闭合标签  <Foo ... />
// 2. 双标签     <Foo ...>...</Foo>
// 3. 支持换行、属性里有引号等情况
const vueTagRE = /(<\/?[A-Z][a-zA-Z0-9]*(?:-[a-zA-Z0-9]+)*(?:\s[^>]*?)?\/?>)/gs;

/**
 * 将自定义的 Vue 标签转换为 `` 包裹的文本
 * 处理问题：https://github.com/flingyp/vitepress-markmap-preview/issues/5
 * @param content 需要转换的文本
 * @returns 转换后的文本
 */
function escapeCustomVueTags(content: string) {
  return content.replace(vueTagRE, '`$1`');
}

// 处理替换标签的函数
function processTag(
  attrsStr: string,
  env: { path: string },
  options: VitepressMarkmapPreviewOptions,
) {
  try {
    // 检查 attrsStr 是否包含 showToolbar 属性
    const showToolbar =
      /\bshowToolbar\b/i.test(attrsStr) || options.showToolbar;

    // 从属性中提取路径
    const filePath = extractPath(attrsStr);
    let fileContent = '';
    // 获取当前处理的md文件的目录，以便正确解析相对路径
    let basePath = '';
    if (env && env.path) {
      basePath = path.dirname(env.path);
    } else if (process.cwd) {
      // 回退到当前工作目录
      basePath = process.cwd();
    }

    if (!filePath) {
      // 未传 path，默认读取当前 MD 文件内容
      if (env && env.path) {
        try {
          fileContent = fs.readFileSync(env.path, 'utf-8');
        } catch (err) {
          console.error(`无法读取当前MD文件: ${env.path}`, err);
          fileContent = `# 文件读取失败\n\n无法加载: 当前文档`;
        }
      } else {
        fileContent = `# 文件读取失败\n\n未指定 path，且无法获取当前文档路径`;
      }
    } else {
      // 解析文件的完整路径
      const fullPath = path.resolve(basePath, filePath);
      try {
        fileContent = fs.readFileSync(fullPath, 'utf-8');
      } catch (err) {
        console.error(`无法读取文件: ${fullPath}`, err);
        fileContent = `# 文件读取失败\n\n无法加载: ${filePath}`;
      }
    }

    // 解析配置
    const config = parseMarkmapConfig(fileContent);
    const finalShowToolbar = config.showToolbar ?? showToolbar;

    // 移除 frontmatter，获取纯 markdown 内容
    const markdownContent = removeFrontmatter(fileContent);

    // 文件内容传递自定义组件内容转换为字符串内容
    const processedContent = escapeCustomVueTags(markdownContent);

    // 将配置序列化为 JSON 字符串传递给组件
    const configJson = JSON.stringify(config.markmap || {});

    // 将内容传递给 MindMapRoot 组件
    return `
      <ClientOnly>
        <MarkmapRoot
          markdown="${encodeURIComponent(processedContent)}"
          showToolbar="${finalShowToolbar ? 1 : 0}"
          config="${encodeURIComponent(configJson)}"
        />
      </ClientOnly>
    `;
  } catch (error) {
    console.error('处理ReviewMarkmap组件时出错:', error);
    return `<div class="markmap-error">加载思维导图失败</div>`;
  }
}

/**
 * 读取指定MD文件内容，展示思维导图
 * 支持两种写法：<PreviewMarkmapPath path="./xx.md" /> 和 <PreviewMarkmapPath path="./xx.md"></PreviewMarkmapPath>
 * @param md
 */
export function parseMarkmapComponent(
  md: MarkdownIt,
  options: VitepressMarkmapPreviewOptions,
) {
  // 添加对 PreviewMarkmapPath 组件的解析
  const originalRender = md.render;
  md.render = function (src, env) {
    let result = originalRender.call(this, src, env);

    // 替换所有自闭合的 <PreviewMarkmapPath /> 标签
    result = result.replace(customComponentRegex1, (match, attrsStr) => {
      return processTag(attrsStr, env, options);
    });

    // 替换所有双标签的 <PreviewMarkmapPath></PreviewMarkmapPath> 标签
    result = result.replace(customComponentRegex2, (match, attrsStr) => {
      return processTag(attrsStr, env, options);
    });

    return result;
  };
}
