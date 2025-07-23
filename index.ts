import type MarkdownIt from 'markdown-it';
import {
  vitepressMarkmapPreview,
  type VitepressMarkmapPreviewOptions,
} from 'vitepress-markmap-preview';
import {
  vitepressMermaidPreview,
  type VitepressMermaidPreviewOptions,
} from 'vitepress-mermaid-preview';

export interface VitepressPluginLegendOptions {
  markmap?: VitepressMarkmapPreviewOptions | false;
  mermaid?: VitepressMermaidPreviewOptions | false;
}

const defaultOptions: VitepressPluginLegendOptions = {
  markmap: {
    showToolbar: false,
  },
  mermaid: {
    showToolbar: false,
  },
};

/**
 * VitePress Plugin Legend - A collection of VitePress plugins for Markdown diagram preview
 * Integrates both markmap and mermaid preview functionality
 */
export function vitepressPluginLegend(
  md: MarkdownIt,
  options: VitepressPluginLegendOptions = defaultOptions,
) {
  // Initialize markmap plugin if enabled
  if (options.markmap !== false) {
    vitepressMarkmapPreview(md, options.markmap! || defaultOptions.markmap!);
  }

  // Initialize mermaid plugin if enabled
  if (options.mermaid !== false) {
    vitepressMermaidPreview(md, options.mermaid! || defaultOptions.mermaid!);
  }
}

// Re-export individual plugins for granular usage
export {
  vitepressMarkmapPreview,
  type VitepressMarkmapPreviewOptions,
} from './packages/vitepress-markmap-preview';
export {
  vitepressMermaidPreview,
  type VitepressMermaidPreviewOptions,
} from './packages/vitepress-mermaid-preview';

// Re-export types
export type { IMarkmapOptions } from 'markmap-view';

// Default export
export default vitepressPluginLegend;
