import MarkdownIt from 'markdown-it';
import { parseMermaidCode } from './utils/parse-code';
import { parseMermaidComponent } from './utils/parse-component';

export interface VitepressMermaidPreviewOptions {
  showToolbar?: boolean;
}

export function vitepressMermaidPreview(
  md: MarkdownIt,
  options: VitepressMermaidPreviewOptions = {},
) {
  parseMermaidCode(md, options);
  parseMermaidComponent(md, options);
}
