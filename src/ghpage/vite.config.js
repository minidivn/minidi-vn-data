import { defineConfig } from 'vite';
export default defineConfig({
  root: ".",
  base: "./",
  build: { outDir: "../../docs", emptyOutDir: false, sourcemap: false },
  server: { port: 5173 }
});
