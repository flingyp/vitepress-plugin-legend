import { VitepressMarkmapPreviewOptions } from 'index';
import MarkdownIt from 'markdown-it';

/**
 * 读取指定 `markmap` 的代码内容，展示思维导图
 * @param md
 */
export function parseMarkmapCode(
  md: MarkdownIt,
  options: VitepressMarkmapPreviewOptions,
) {
  const defaultFenceRender = md.renderer.rules.fence!;
  md.renderer.rules.fence = (tokens, idx, _options, env, self) => {
    const token = tokens[idx];
    const lang = token.info.trim() || 'text'; // 获取语言标记（如 ```js 中的 js）

    // 从转换后的数据渲染一个 Markmap 视图
    if (lang === 'markmap') {
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
          <MindMapRoot type="view" markdown=${encodeURIComponent(token.content)} showToolbar=${showToolbar ? 1 : 0} />
        </ClientOnly>
        `;
    }

    return defaultFenceRender(tokens, idx, _options, env, self);
  };
}
