// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.atreyadey.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  // Old Google Sites URLs → new locations
  redirects: {
    '/bio': '/#about',
    '/interviews-media': '/news',
    '/home': '/',
  },
});
