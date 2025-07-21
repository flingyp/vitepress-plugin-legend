import MarkdownIt from 'markdown-it';
import fs from 'fs';
import path from 'path';

// 添加自定义容器解析，用于处理 <PreviewMermaidPath> 标签
const customComponentRegex1 = /<PreviewMermaidPath\s*(.*?)\s*\/>/g; // 自闭合标签，允许无属性
const customComponentRegex2 =
  /<PreviewMermaidPath\s*(.*?)><\/PreviewMermaidPath>/g; // 双标签，允许无属性

// 从属性字符串中提取路径
function extractPath(attrsStr: string): string {
  const pathMatch = /path=['"](.*?)['"]/.exec(attrsStr);
  return pathMatch ? pathMatch[1] : '';
}

// 处理替换标签的函数
function processTag(attrsStr: string, env: { path: string }) {
  try {
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
      // 未传 path，报错
      return `<div class="mermaid-error">未指定文件路径</div>`;
    } else {
      // 解析文件的完整路径
      const fullPath = path.resolve(basePath, filePath);
      try {
        fileContent = fs.readFileSync(fullPath, 'utf-8');

        // 不再提取 mermaid 代码块，直接将文件内容作为 mermaid 代码
        if (!fileContent.trim()) {
          return `<div class="mermaid-error">文件内容为空: ${filePath}</div>`;
        }
      } catch (err) {
        console.error(`无法读取文件: ${fullPath}`, err);
        return `<div class="mermaid-error">无法加载文件: ${filePath}</div>`;
      }
    }

    // 将内容传递给 MermaidChart 组件
    return `
      <ClientOnly>
        <MermaidChart code=${encodeURIComponent(fileContent)} />
      </ClientOnly>
    `;
  } catch (error) {
    console.error('处理 PreviewMermaidPath 组件时出错:', error);
    return `<div class="mermaid-error">加载 mermaid 图表失败</div>`;
  }
}

/**
 * 读取指定MD文件内容，展示 mermaid 图表
 * 支持两种写法：<PreviewMermaidPath path="./xx.md" /> 和 <PreviewMermaidPath path="./xx.md"></PreviewMermaidPath>
 * @param md
 */
export function parseMermaidComponent(md: MarkdownIt) {
  // 添加对 PreviewMermaidPath 组件的解析
  const originalRender = md.render;
  md.render = function (src, env) {
    let result = originalRender.call(this, src, env);

    // 替换所有自闭合的 <PreviewMermaidPath /> 标签
    result = result.replace(customComponentRegex1, (match, attrsStr) => {
      return processTag(attrsStr, env);
    });

    // 替换所有双标签的 <PreviewMermaidPath></PreviewMermaidPath> 标签
    result = result.replace(customComponentRegex2, (match, attrsStr) => {
      return processTag(attrsStr, env);
    });

    return result;
  };
}
