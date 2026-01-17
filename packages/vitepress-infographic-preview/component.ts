import type { App } from 'vue';
import InfographicChart from './components/InfographicChart.vue';

export function initComponent(app: App): void {
  app.component('InfographicChart', InfographicChart);
}
