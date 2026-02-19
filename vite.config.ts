import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import litCss from 'vite-plugin-lit-css';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [litCss({}), dts({ include: ['lib'] })],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      formats: ['es'],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
