import { defineConfig } from 'vite';

// GitHub Pages project site: https://datawizibility.github.io/intraday-hunter-learnings/
const base =
  process.env.GITHUB_PAGES === '1' ? '/intraday-hunter-learnings/' : '/';

export default defineConfig({
  base,
  root: '.',
  publicDir: 'public',
  server: {
    port: 5173,
    open: false,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
