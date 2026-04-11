import MarkdownIt from 'markdown-it';
import type { VitepressPlantumlPreviewOptions } from '../types';
import { normalizePlantumlSourceForEncode } from './encode-plantuml-server';

/**
 * 识别 `plantuml` / `puml` 围栏，渲染为 PlantumlChart。
 * 支持可选 frontmatter：`showToolbar: true|false`（覆盖全局默认）。
 */
export function parsePlantumlCode(
  md: MarkdownIt,
  options: VitepressPlantumlPreviewOptions = {},
) {
  const defaultFenceRender = md.renderer.rules.fence!;
  md.renderer.rules.fence = (tokens, idx, mdOpts, env, self) => {
    const token = tokens[idx];
    const lang = (token.info || '').trim() || 'text';

    if (lang === 'plantuml' || lang === 'puml') {
      let showToolbar = options.showToolbar !== false;
      let body = token.content;

      const frontmatterMatch = body.match(/^---\s*([\s\S]*?)\s*---/);
      if (frontmatterMatch) {
        const showToolbarMatch = frontmatterMatch[1].match(
          /showToolbar:\s*(true|false)/i,
        );
        if (showToolbarMatch) {
          showToolbar = showToolbarMatch[1].toLowerCase() === 'true';
        }
        body = body.slice(frontmatterMatch[0].length).replace(/^\s*\n/, '');
      }

      const safeBody = normalizePlantumlSourceForEncode(body);

      return `
        <ClientOnly>
          <PlantumlChart
            code="${encodeURIComponent(safeBody)}"
            showToolbar="${showToolbar ? '1' : '0'}"
          />
        </ClientOnly>
      `;
    }

    return defaultFenceRender(tokens, idx, mdOpts, env, self);
  };
}
