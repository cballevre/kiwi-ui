import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import { resolve } from 'node:path';
import { peerDependencies } from './package.json';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // Exclude peer dependencies from the bundle to reduce bundle size
      external: ['react/jsx-runtime', ...Object.keys(peerDependencies)],
    },
  },
});
