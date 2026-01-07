
import { defineConfig } from 'vite';

export default defineConfig({
  // A base deve ser o nome do seu repositório no GitHub
  base: '/Inlusaoaee/',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000
  }
});
