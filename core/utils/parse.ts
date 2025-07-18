import MarkdownIt from 'markdown-it';
import fs from 'fs';
import path from 'path';

/**
 * 读取指定 `mermaid` 的代码内容，展示思维导图
 * @param md
 */
export function parseMermaid(md: MarkdownIt) {
  const defaultFenceRender = md.renderer.rules.fence!;
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const lang = token.info.trim() || 'text'; // 获取语言标记（如 ```js 中的 js）

    // 从转换后的数据渲染一个 Markmap 视图
    if (lang === 'mermaid' || lang === 'mermaid-view') {
      return `
        <ClientOnly>
          <MindMapRoot type="view" markdown=${encodeURIComponent(token.content)} />
        </ClientOnly>
        `;
    }

    // TODO: 将 Markmap 数据渲染为交互式 HTML
    if (lang === 'mermaid-render') {
      return `
        <ClientOnly>
          <MindMapRoot type="render" markdown=${encodeURIComponent(token.content)} />
        </ClientOnly>
      `;
    }

    return defaultFenceRender(tokens, idx, options, env, self);
  };
}

// 从属性字符串中提取路径
const extractPath = (attrsStr: string): string => {
  const pathMatch = /path=['"](.*?)['"]/.exec(attrsStr);
  return pathMatch ? pathMatch[1] : '';
};

/**
 * 读取指定MD文件内容，展示思维导图
 * 支持两种写法：<PreviewMarkmapPath path="./xx.md" /> 和 <PreviewMarkmapPath path="./xx.md"></PreviewMarkmapPath>
 * @param md
 */
export function parsePreviewMarkmap(md: MarkdownIt) {
  // 添加自定义容器解析，用于处理 <PreviewMarkmapPath> 标签
  const customComponentRegex1 = /<PreviewMarkmapPath\s+(.*?)\s*\/>/g; // 自闭合标签
  const customComponentRegex2 =
    /<PreviewMarkmapPath\s+(.*?)><\/PreviewMarkmapPath>/g; // 双标签

  // 添加对ReviewMarkmap组件的解析
  const originalRender = md.render;
  md.render = function (src, env) {
    let result = originalRender.call(this, src, env);

    // 处理替换标签的函数
    const processTag = (match: string, attrsStr: string) => {
      try {
        // 从属性中提取路径
        const filePath = extractPath(attrsStr);
        if (!filePath) {
          console.error('未找到有效的path属性:', attrsStr);
          return `<div class="markmap-error">错误: 未指定有效的path属性</div>`;
        }

        // 获取当前处理的md文件的目录，以便正确解析相对路径
        let basePath = '';

        if (env && env.path) {
          basePath = path.dirname(env.path);
        } else if (process.cwd) {
          // 回退到当前工作目录
          basePath = process.cwd();
        }

        // 解析文件的完整路径
        const fullPath = path.resolve(basePath, filePath);

        // 读取文件内容
        let fileContent = '';
        try {
          fileContent = fs.readFileSync(fullPath, 'utf-8');
        } catch (err) {
          console.error(`无法读取文件: ${fullPath}`, err);
          fileContent = `# 文件读取失败\n\n无法加载: ${filePath}`;
        }

        // 将原始属性字符串传递给组件，以支持更多参数
        const propsStr = attrsStr.replace(
          /path=['"](.*?)['"]/,
          `path="${filePath}"`,
        );

        // 将内容传递给 MindMapRoot 组件
        return `
          <ClientOnly>
            <MindMapRoot markdown=${encodeURIComponent(fileContent)} ${propsStr} />
          </ClientOnly>
        `;
      } catch (error) {
        console.error('处理ReviewMarkmap组件时出错:', error);
        return `<div class="markmap-error">加载思维导图失败</div>`;
      }
    };

    // 替换所有自闭合的 <PreviewMarkmapPath /> 标签
    result = result.replace(customComponentRegex1, (match, attrsStr) => {
      return processTag(match, attrsStr);
    });

    // 替换所有双标签的 <PreviewMarkmapPath></PreviewMarkmapPath> 标签
    result = result.replace(customComponentRegex2, (match, attrsStr) => {
      return processTag(match, attrsStr);
    });

    return result;
  };
}
