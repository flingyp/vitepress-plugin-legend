import MarkdownIt from 'markdown-it';

export function vitepressMarkmapPreview(md: MarkdownIt) {
  const defaultFenceRender = md.renderer.rules.fence!;
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    console.log('tokens:', tokens);
    console.log('idx:', idx);
    console.log('options:', options);
    console.log('env:', env);
    console.log('self:', self);
    const token = tokens[idx];
    // token.content 包裹的内容
    // 获取语言标记（如 ```js 中的 js）
    const lang = token.info.trim() || 'text';
    // 将 Markmap 数据渲染为交互式 HTML
    // TODO: 确认使用方式
    // 走特殊渲染逻辑
    if (lang === 'mermaid-render') {
      return `
        <ClientOnly>
          <MindMapRoot type="render" markdown=${encodeURIComponent(token.content)} />
        </ClientOnly>
      `;
    }
    // 从转换后的数据渲染一个 Markmap 视图
    // TODO: 确认使用方式
    // 走特殊渲染逻辑
    if (lang === 'mermaid-view') {
      return `
        <ClientOnly>
          <MindMapRoot type="view" markdown=${encodeURIComponent(token.content)} />
        </ClientOnly>
      `;
    }
    return defaultFenceRender(tokens, idx, options, env, self);
  };
}

export { default as MindMapRoot } from './MindMapRoot.vue';
