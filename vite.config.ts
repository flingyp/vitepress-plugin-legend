import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// @ts-expect-error 未知错误
import dts from 'unplugin-dts/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      bundleTypes: true,
      tsconfigPath: './tsconfig.json',
    }),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'index.ts'),
        component: resolve(__dirname, 'component.ts'),
      },
      name: 'VitepressPluginLegend',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        'vue',
        'markdown-it',
        'markmap-lib',
        'markmap-view',
        'markmap-toolbar',
        'mermaid',
        'path',
        'fs',
      ],
      output: {
        globals: {
          vue: 'Vue',
          'markdown-it': 'MarkdownIt',
          'markmap-lib': 'markmap',
          'markmap-view': 'markmap',
          'markmap-toolbar': 'markmap',
          mermaid: 'mermaid',
        },
      },
    },
  },
});
