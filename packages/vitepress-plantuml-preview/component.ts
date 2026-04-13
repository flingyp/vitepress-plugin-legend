import type { App } from 'vue';
import PlantumlChart from './components/PlantumlChart.vue';

export function initComponent(app: App): void {
  app.component('PlantumlChart', PlantumlChart);
  app.component('plantuml-chart', PlantumlChart);
}
