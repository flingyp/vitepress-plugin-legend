import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { MindMapRoot } from 'vitepress-markmap-preview';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.component('MindMapRoot', MindMapRoot);
  },
} satisfies Theme;
