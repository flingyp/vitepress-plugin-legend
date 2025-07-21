import MarkdownIt from 'markdown-it';
import { parseMarkmapCode } from './utils/parse-code';
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
  parseMarkmapCode(md, options);
  parseMarkmapComponent(md, options);
}

export type { IMarkmapOptions } from 'markmap-view';
