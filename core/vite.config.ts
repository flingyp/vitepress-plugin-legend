import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// @ts-expect-error 未知错误
import dts from 'unplugin-dts/vite';

export default defineConfig({
  build: {
    lib: {
      entry: './index.ts',
      name: 'VitepressMarkmapPreview',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      // 把 vue 打到外部依赖，不打包进库
      external: ['vue'],
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
