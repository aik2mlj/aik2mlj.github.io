import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lejun.site',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  redirects: {
    '/resume': '/cv/',
    '/about.html': '/about/',
    '/publications': '/research/#publications',
    '/talks': '/research/#talks',
    '/teaching': '/research/#teaching',
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'vitesse-light', dark: 'vitesse-dark' },
    },
  },
});
