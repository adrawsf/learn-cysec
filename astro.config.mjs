// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://cyberlearning.local', // Replace with your GitHub Pages URL
  // base: '/your-repo-name', // Uncomment and replace if deploying to a subpath
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [mdx(), sitemap()]
});