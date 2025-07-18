import MarkdownIt from 'markdown-it';
import fs from 'fs';
import path from 'path';

export function vitepressMarkmapPreview(md: MarkdownIt) {
  const defaultFenceRender = md.renderer.rules.fence!;
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    // console.log('tokens:', tokens);
    // console.log('idx:', idx);
    // console.log('options:', options);
    // console.log('env:', env);
    // console.log('self:', self);
    // token.content 包裹的内容
    const token = tokens[idx];
    const lang = token.info.trim() || 'text'; // 获取语言标记（如 ```js 中的 js）

    // 从转换后的数据渲染一个 Markmap 视图
    if (lang === 'mermaid' || lang === 'mermaid-view') {
      return `
        <ClientOnly>
          <MindMapRoot type="view" markdown=${encodeURIComponent(token.content)} />
        </ClientOnly>
        `;
    }

    // 将 Markmap 数据渲染为交互式 HTML
    if (lang === 'mermaid-render') {
      return `
        <ClientOnly>
          <MindMapRoot type="render" markdown=${encodeURIComponent(token.content)} />
        </ClientOnly>
      `;
    }

    return defaultFenceRender(tokens, idx, options, env, self);
  };

  // 添加自定义容器解析，用于处理 <ReviewMarkmap path="./xx.md" /> 标签
  const customComponentRegex = /<ReviewMarkmap\s+path=['"](.*?)['"]\s*\/>/g;

  // 添加对ReviewMarkmap组件的解析
  const originalRender = md.render;
  md.render = function (src, env) {
    console.log('env:', env);
    let result = originalRender.call(this, src, env);

    // 替换所有<ReviewMarkmap>标签
    result = result.replace(customComponentRegex, (match, filePath) => {
      try {
        // 获取当前处理的md文件的目录，以便正确解析相对路径
        let basePath = '';

        if (env && env.path) {
          basePath = path.dirname(env.path);
        } else if (process.cwd) {
          // 回退到当前工作目录
          basePath = process.cwd();
        }

        // 解析文件的完整路径
        const fullPath = path.resolve(basePath, filePath);

        // 读取文件内容
        let fileContent = '';
        try {
          fileContent = fs.readFileSync(fullPath, 'utf-8');
        } catch (err) {
          console.error(`无法读取文件: ${fullPath}`, err);
          fileContent = `# 文件读取失败\n\n无法加载: ${filePath}`;
        }

        // 将内容传递给MindMapRoot组件
        return `
          <ClientOnly>
            <MindMapRoot type="render" markdown=${encodeURIComponent(fileContent)} />
          </ClientOnly>
        `;
      } catch (error) {
        console.error('处理ReviewMarkmap组件时出错:', error);
        return `<div class="markmap-error">加载思维导图失败: ${filePath}</div>`;
      }
    });

    return result;
  };
}

export type { IMarkmapOptions } from 'markmap-view';
