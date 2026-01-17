import MarkdownIt from 'markdown-it';
import { VitepressInfographicPreviewOptions } from '../index';

export function parseInfographicCode(
  md: MarkdownIt,
  options: VitepressInfographicPreviewOptions = {},
) {
  const defaultFenceRender = md.renderer.rules.fence!;
  md.renderer.rules.fence = (tokens, idx, _options, env, self) => {
    const token = tokens[idx];
    const lang = token.info.trim() || 'text';

    if (lang === 'infographic') {
      let showToolbar = options.showToolbar !== false;

      const frontmatterMatch = token.content.match(/^---\s*([\s\S]*?)\s*---/);
      if (frontmatterMatch) {
        const showToolbarMatch = frontmatterMatch[1].match(
          /showToolbar:\s*(true|false)/i,
        );
        if (showToolbarMatch) {
          showToolbar = showToolbarMatch[1] === 'true';
        }
      }

      return `
        <ClientOnly>
          <InfographicChart code="${encodeURIComponent(token.content)}" showToolbar="${showToolbar ? '1' : '0'}" />
        </ClientOnly>
      `;
    }

    return defaultFenceRender(tokens, idx, _options, env, self);
  };
}
