import MarkdownIt from 'markdown-it';
import { parseMermaidCode } from './utils/parse-code';

export function vitepressMermaidPreview(md: MarkdownIt) {
  parseMermaidCode(md);
}
