import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // CRITICAL CONFIG: Tell Astro your exact live URL location
  site: 'https://thankwisdom.com',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sitemap()
  ],
});
