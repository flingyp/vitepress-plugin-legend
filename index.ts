import type MarkdownIt from 'markdown-it';
import {
  vitepressMarkmapPreview,
  type VitepressMarkmapPreviewOptions,
} from 'vitepress-markmap-preview';
import {
  vitepressMermaidPreview,
  type VitepressMermaidPreviewOptions,
} from 'vitepress-mermaid-preview';
import {
  vitepressInfographicPreview,
  type VitepressInfographicPreviewOptions,
} from 'vitepress-infographic-preview';

export interface VitepressPluginLegendOptions {
  markmap?: VitepressMarkmapPreviewOptions | false;
  mermaid?: VitepressMermaidPreviewOptions | false;
  infographic?: VitepressInfographicPreviewOptions | false;
}

const defaultOptions: VitepressPluginLegendOptions = {
  markmap: {
    showToolbar: false,
  },
  mermaid: {
    showToolbar: false,
  },
  infographic: {
    showToolbar: false,
  },
};

/**
 * VitePress Plugin Legend - A collection of VitePress plugins for Markdown diagram preview
 * Integrates markmap, mermaid, and infographic preview functionality
 */
export function vitepressPluginLegend(
  md: MarkdownIt,
  options: VitepressPluginLegendOptions = defaultOptions,
) {
  if (options.markmap !== false) {
    vitepressMarkmapPreview(md, options.markmap! || defaultOptions.markmap!);
  }

  if (options.mermaid !== false) {
    vitepressMermaidPreview(md, options.mermaid! || defaultOptions.mermaid!);
  }

  if (options.infographic !== false) {
    vitepressInfographicPreview(
      md,
      options.infographic! || defaultOptions.infographic!,
    );
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
export {
  vitepressInfographicPreview,
  type VitepressInfographicPreviewOptions,
} from './packages/vitepress-infographic-preview';

// Re-export types
export type { IMarkmapOptions } from 'markmap-view';

// Default export
export default vitepressPluginLegend;
