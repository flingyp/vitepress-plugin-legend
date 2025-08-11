import { VitepressMarkmapPreviewOptions } from 'index';
import MarkdownIt from 'markdown-it';
import { parseMarkmapConfig, removeFrontmatter } from './parse-config';

/**
 * 读取指定 `markmap` 的代码内容，展示思维导图
 * @param md
 */
export function parseMarkmapCode(
  md: MarkdownIt,
  options: VitepressMarkmapPreviewOptions,
) {
  const defaultFenceRender = md.renderer.rules.fence!;
  md.renderer.rules.fence = (tokens, idx, _options, env, self) => {
    const token = tokens[idx];
    const lang = token.info.trim() || 'text'; // 获取语言标记（如 ```js 中的 js）

    // 从转换后的数据渲染一个 Markmap 视图
    if (lang === 'markmap') {
      // 解析配置
      const config = parseMarkmapConfig(token.content);
      const showToolbar = config.showToolbar ?? options.showToolbar !== false;

      // 移除 frontmatter，获取纯 markdown 内容
      const markdownContent = removeFrontmatter(token.content);

      // 将配置序列化为 JSON 字符串传递给组件
      const configJson = JSON.stringify(config.markmap || {});

      return `
        <ClientOnly>
          <MarkmapRoot
            markdown="${encodeURIComponent(markdownContent)}"
            showToolbar="${showToolbar ? 1 : 0}"
            config="${encodeURIComponent(configJson)}"
          />
        </ClientOnly>
        `;
    }

    return defaultFenceRender(tokens, idx, _options, env, self);
  };
}
