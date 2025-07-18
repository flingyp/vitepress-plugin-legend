import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import {
  MindMapRoot,
  ReviewMarkmap,
} from 'vitepress-markmap-preview/component';
import 'vitepress-markmap-preview/dist/index.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.component('MindMapRoot', MindMapRoot);
    app.component('ReviewMarkmap', ReviewMarkmap);
  },
} satisfies Theme;
