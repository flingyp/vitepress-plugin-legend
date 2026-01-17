import type { App } from 'vue';
import { initComponent as initMarkmapComponent } from 'vitepress-markmap-preview/component';
import { initComponent as initMermaidComponent } from 'vitepress-mermaid-preview/component';
import { initComponent as initInfographicComponent } from 'vitepress-infographic-preview/component';

/**
 * Initialize all components for VitePress Plugin Legend
 * This includes markmap, mermaid, and infographic components
 *
 * Note: CSS files should be imported in the theme/index.ts file of your VitePress project
 */
export function initComponent(app: App): void {
  // Initialize markmap components
  initMarkmapComponent(app);

  // Initialize mermaid components
  initMermaidComponent(app);

  // Initialize infographic components
  initInfographicComponent(app);
}

// Re-export individual component initializers
export { initComponent as initMarkmapComponent } from 'vitepress-markmap-preview/component';
export { initComponent as initMermaidComponent } from 'vitepress-mermaid-preview/component';
export { initComponent as initInfographicComponent } from 'vitepress-infographic-preview/component';
