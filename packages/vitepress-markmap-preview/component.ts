import { App } from 'vue';
import { default as MindMapRoot } from './components/MindMapRoot.vue';

export function initComponent(app: App) {
  app.component('MindMapRoot', MindMapRoot);
}
