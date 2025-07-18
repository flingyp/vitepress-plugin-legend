import { App } from 'vue';
import { default as MindMapRoot } from './components/MindMapRoot.vue';
import { default as PreviewMarkmapPath } from './components/PreviewMarkmapPath.vue';

export function initComponent(app: App) {
  app.component('MindMapRoot', MindMapRoot);
  app.component('PreviewMarkmapPath', PreviewMarkmapPath);
}
