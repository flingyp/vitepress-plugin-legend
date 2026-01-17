import MarkdownIt from 'markdown-it';
import { parseInfographicCode } from './utils/parse-code';
import { parseInfographicComponent } from './utils/parse-component';

export interface VitepressInfographicPreviewOptions {
  showToolbar?: boolean;
}

export function vitepressInfographicPreview(
  md: MarkdownIt,
  options: VitepressInfographicPreviewOptions = {},
) {
  parseInfographicCode(md, options);
  parseInfographicComponent(md, options);
}
