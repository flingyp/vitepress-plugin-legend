import { App } from 'vue';
import { default as MarkmapRoot } from './components/MarkmapRoot.vue';

export function initComponent(app: App) {
  app.component('MarkmapRoot', MarkmapRoot);
}
