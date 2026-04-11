import MarkdownIt from 'markdown-it';
import type { VitepressPlantumlPreviewOptions } from './types';
import { parsePlantumlCode } from './utils/parse-code';

export type { VitepressPlantumlPreviewOptions } from './types';

/**
 * 注册 PlantUML 代码块（`plantuml` / `puml`）为可预览组件。
 * 渲染固定使用官方 PlantUML Server 与 SVG；仅 `showToolbar` 可配置。
 */
export function vitepressPlantumlPreview(
  md: MarkdownIt,
  options: VitepressPlantumlPreviewOptions = {},
) {
  parsePlantumlCode(md, options);
}
