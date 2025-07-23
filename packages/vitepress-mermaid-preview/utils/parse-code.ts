import MarkdownIt from 'markdown-it';
import { VitepressMermaidPreviewOptions } from '../index';

/**
 * 读取指定 `mermaid` 的代码内容，展示思维导图
 * @param md
 * @param options
 */
export function parseMermaidCode(
  md: MarkdownIt,
  options: VitepressMermaidPreviewOptions = {},
) {
  const defaultFenceRender = md.renderer.rules.fence!;
  md.renderer.rules.fence = (tokens, idx, _options, env, self) => {
    const token = tokens[idx];
    const lang = token.info.trim() || 'text'; // 获取语言标记（如 ```js 中的 js）

    // 从转换后的数据渲染一个 Mermaid 视图
    if (lang === 'mermaid') {
      // 提取 frontmatter
      let showToolbar = options.showToolbar !== false;
      const frontmatterMatch = token.content.match(/^---\s*([\s\S]*?)\s*---/);
      if (frontmatterMatch) {
        const showToolbarMatch = frontmatterMatch[1].match(
          /showToolbar:\s*(true|false)/i,
        );
        if (showToolbarMatch) {
          showToolbar = showToolbarMatch[1] === 'true';
        }
      }

      return `
        <ClientOnly>
          <MermaidChart code="${encodeURIComponent(token.content)}" :showToolbar="${showToolbar}" />
        </ClientOnly>
      `;
    }

    return defaultFenceRender(tokens, idx, _options, env, self);
  };
}
