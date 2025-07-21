import type { App } from 'vue';
import MermaidChart from './components/MermaidChart.vue';

/**
 * 注册 MermaidChart 组件到 Vue 应用
 * @param app Vue 应用实例
 */
export function initComponent(app: App): void {
  app.component('MermaidChart', MermaidChart);
}
