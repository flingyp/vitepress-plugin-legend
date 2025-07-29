import type { App } from 'vue';
import MermaidChart from './components/MermaidChart.vue';

export function initComponent(app: App): void {
  app.component('MermaidChart', MermaidChart);
}
