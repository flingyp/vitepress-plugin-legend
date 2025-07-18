import MarkdownIt from 'markdown-it';
import { parseMermaid, parsePreviewMarkmap } from './utils/parse';

export function vitepressMarkmapPreview(md: MarkdownIt) {
  parseMermaid(md);
  parsePreviewMarkmap(md);
}

export type { IMarkmapOptions } from 'markmap-view';
