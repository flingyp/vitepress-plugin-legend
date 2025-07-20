import MarkdownIt from 'markdown-it';
import { parseMermaidCode } from './utils/parse-code';
import { parseMarkmapComponent } from './utils/parse-component';

export function vitepressMarkmapPreview(md: MarkdownIt) {
  parseMermaidCode(md);
  parseMarkmapComponent(md);
}

export type { IMarkmapOptions } from 'markmap-view';
