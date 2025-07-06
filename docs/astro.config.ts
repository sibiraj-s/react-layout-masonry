import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://sibiraj-s.github.io',
  base: '/react-layout-masonry',

  integrations: [
    starlight({
      title: 'React Layout Masonry',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/sibiraj-s/react-layout-masonry',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/sibiraj-s/react-layout-masonry/tree/master/docs/',
      },
      pagination: true,
      lastUpdated: true,
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: 'Installation & Usage',
              link: '/guides/installation/',
            },
          ],
        },
        {
          label: 'Examples',
          autogenerate: {
            directory: 'examples',
          },
        },
      ],
      customCss: ['./src/styles/tailwind.css'],
    }),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
