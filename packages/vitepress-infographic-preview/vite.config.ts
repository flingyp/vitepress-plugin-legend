import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// @ts-expect-error 未知错误
import dts from 'unplugin-dts/vite';

export default defineConfig({
  build: {
    lib: {
      entry: ['./index.ts', './component.ts'],
      name: 'VitepressInfographicPreview',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['vue', 'path', 'fs'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue(),
    dts({
      bundleTypes: true,
      tsconfigPath: './tsconfig.json',
    }),
  ],
});
