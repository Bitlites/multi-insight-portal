import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build
export default defineConfig({
  // CRITICAL CONFIG: Tell Astro your exact live URL location
  site: 'https://multi-insight-portal.pages.dev', 
  vite: {
    plugins: [tailwindcss()]
  }
});
