import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      formats: ['es'],
      fileName: 'index',
    },
    sourcemap: true,
  },
  test: {
    environment: 'jsdom',
  },
});
