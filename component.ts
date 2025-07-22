import type { App } from 'vue';
import { initComponent as initMarkmapComponent } from 'vitepress-markmap-preview/component';
import { initComponent as initMermaidComponent } from 'vitepress-mermaid-preview/component';

import 'vitepress-markmap-preview/dist/index.css';
import 'vitepress-mermaid-preview/dist/index.css';

/**
 * Initialize all components for VitePress Plugin Legend
 * This includes both markmap and mermaid components
 */
export function initComponent(app: App): void {
  // Initialize markmap components
  initMarkmapComponent(app);

  // Initialize mermaid components
  initMermaidComponent(app);
}

// Re-export individual component initializers
export { initComponent as initMarkmapComponent } from 'vitepress-markmap-preview/component';
export { initComponent as initMermaidComponent } from 'vitepress-mermaid-preview/component';
