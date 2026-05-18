import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://georgecarol210896.github.io',
  base: '/carol_s_manuscript',
  integrations: [tailwind()],
});
