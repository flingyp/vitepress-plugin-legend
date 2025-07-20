import MarkdownIt from 'markdown-it';
import { parseMermaidCode } from './utils/parse-code';
import { parseMarkmapComponent } from './utils/parse-component';

export interface VitepressMarkmapPreviewOptions {
  showToolbar: boolean;
}

const defaultOptions: VitepressMarkmapPreviewOptions = {
  showToolbar: false,
};

export function vitepressMarkmapPreview(
  md: MarkdownIt,
  options: VitepressMarkmapPreviewOptions = defaultOptions,
) {
  console.log('options:', options);
  parseMermaidCode(md, options);
  parseMarkmapComponent(md, options);
}

export type { IMarkmapOptions } from 'markmap-view';
