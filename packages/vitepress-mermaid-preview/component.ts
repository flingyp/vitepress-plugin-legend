import type { App } from 'vue';
import MermaidChart from './components/MermaidChart.vue';
import PreviewMermaidPath from './components/PreviewMermaidPath.vue';

export function initComponent(app: App): void {
  app.component('MermaidChart', MermaidChart);
  app.component('PreviewMermaidPath', PreviewMermaidPath);
}
