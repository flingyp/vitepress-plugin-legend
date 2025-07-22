import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

import {
  initMarkmapComponent,
  initMermaidComponent,
  initComponent,
} from 'vitepress-plugin-legend/component';
import 'vitepress-plugin-legend/dist/index.css';

// import { initComponent as initMarkmapComponent } from 'vitepress-markmap-preview/component';
// import { initComponent as initMermaidComponent } from 'vitepress-mermaid-preview/component';
// import 'vitepress-markmap-preview/dist/index.css';
// import 'vitepress-mermaid-preview/dist/index.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    initComponent(app);

    // initMarkmapComponent(app);
    // initMermaidComponent(app);
  },
} satisfies Theme;
