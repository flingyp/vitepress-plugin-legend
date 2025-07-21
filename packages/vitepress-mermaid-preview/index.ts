import MarkdownIt from 'markdown-it';
import { parseMermaidCode } from './utils/parse-code';
import { parseMermaidComponent } from './utils/parse-component';

export function vitepressMermaidPreview(md: MarkdownIt) {
  parseMermaidCode(md);
  parseMermaidComponent(md);
}
