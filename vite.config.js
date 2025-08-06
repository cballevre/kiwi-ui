import { defineConfig } from 'vite';

import { resolve } from 'node:path';

export default defineConfig({
  plugins: [],
  build: {
    target: 'esnext',
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
  },
});
