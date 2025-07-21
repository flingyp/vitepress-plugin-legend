import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { initComponent as initMarkmapComponent } from 'vitepress-markmap-preview/component';
import { initComponent as initMermaidComponent } from 'vitepress-mermaid-preview/component';
import 'vitepress-markmap-preview/dist/index.css';
import 'vitepress-mermaid-preview/dist/index.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    initMarkmapComponent(app);
    initMermaidComponent(app);
  },
} satisfies Theme;
