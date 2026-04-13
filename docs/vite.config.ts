import { defineConfig } from 'vite';

const workspaceDiagramPkgs = [
  'vitepress-plugin-legend',
  'vitepress-markmap-preview',
  'vitepress-mermaid-preview',
  'vitepress-infographic-preview',
  'vitepress-plantuml-preview',
] as const;

export default defineConfig({
  server: {
    host: true,
    open: false,
    fs: {
      strict: false,
    },
  },
  /** 文档站引用 workspace 包时，必须参与 SSR 打包，否则 Markdown 内 Vue 组件无法正确解析/水合 */
  ssr: {
    noExternal: [...workspaceDiagramPkgs],
  },
  optimizeDeps: {
    include: [...workspaceDiagramPkgs],
  },
});
