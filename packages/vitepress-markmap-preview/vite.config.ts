import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// @ts-expect-error 未知错误
import dts from 'unplugin-dts/vite';

export default defineConfig({
  build: {
    lib: {
      entry: ['./index.ts', './component.ts'],
      name: 'VitepressMarkmapPreview',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // 把 vue、path、fs 是外部依赖库，不需要被打进库中
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
