import MarkdownIt from 'markdown-it';

/**
 * 读取指定 `mermaid` 的代码内容，展示思维导图
 * @param md
 */
export function parseMermaidCode(md: MarkdownIt) {
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
