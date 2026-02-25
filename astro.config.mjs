// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.citelines.org',
  integrations: [
    mdx({
      // Make custom components available globally in MDX
      extendMarkdownConfig: true,
    })
  ],
  vite: {
    server: {
      proxy: {
        '/api': {
          target: 'https://youtube-annotator-production.up.railway.app',
          changeOrigin: true,
        }
      }
    }
  }
});