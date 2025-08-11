import type { IMarkmapOptions } from 'markmap-view';
import * as yaml from 'js-yaml';

export interface MarkmapConfig {
  showToolbar?: boolean;
  markmap?: Partial<IMarkmapOptions>;
}

/**
 * 解析 markdown 内容中的 frontmatter 配置
 * @param content markdown 内容
 * @returns 解析后的配置对象
 */
export function parseMarkmapConfig(content: string): MarkmapConfig {
  const config: MarkmapConfig = {
    showToolbar: true,
    markmap: {},
  };

  // 匹配 frontmatter
  const frontmatterMatch = content.match(/^---\s*([\s\S]*?)\s*---/);
  if (!frontmatterMatch) {
    return config;
  }

  const frontmatter = frontmatterMatch[1];

  try {
    // 使用 js-yaml 解析 frontmatter
    const parsedFrontmatter = yaml.load(frontmatter) as Record<string, any>;

    if (parsedFrontmatter && typeof parsedFrontmatter === 'object') {
      // 解析 showToolbar
      if (typeof parsedFrontmatter.showToolbar === 'boolean') {
        config.showToolbar = parsedFrontmatter.showToolbar;
      }

      // 解析 markmap 配置
      if (
        parsedFrontmatter.markmap &&
        typeof parsedFrontmatter.markmap === 'object'
      ) {
        config.markmap = parsedFrontmatter.markmap;
      }
    }
  } catch (error) {
    console.warn('解析 frontmatter 失败:', error);
  }

  return config;
}

/**
 * 移除 markdown 内容中的 frontmatter
 * @param content markdown 内容
 * @returns 移除 frontmatter 后的内容
 */
export function removeFrontmatter(content: string): string {
  return content.replace(/^---\s*[\s\S]*?---\s*/, '');
}
