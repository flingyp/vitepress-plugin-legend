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
import {
  vitepressPlantumlPreview,
  type VitepressPlantumlPreviewOptions,
} from 'vitepress-plantuml-preview';

export interface VitepressPluginLegendOptions {
  markmap?: VitepressMarkmapPreviewOptions | false;
  mermaid?: VitepressMermaidPreviewOptions | false;
  infographic?: VitepressInfographicPreviewOptions | false;
  plantuml?: VitepressPlantumlPreviewOptions | false;
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
  plantuml: {
    showToolbar: false,
  },
};

/**
 * VitePress Plugin Legend - A collection of VitePress plugins for Markdown diagram preview
 * Integrates markmap, mermaid, infographic, and plantuml preview functionality
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

  if (options.plantuml !== false) {
    vitepressPlantumlPreview(md, options.plantuml! || defaultOptions.plantuml!);
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
export {
  vitepressPlantumlPreview,
  type VitepressPlantumlPreviewOptions,
} from './packages/vitepress-plantuml-preview';

// Re-export types
export type { IMarkmapOptions } from 'markmap-view';

// Default export
export default vitepressPluginLegend;
