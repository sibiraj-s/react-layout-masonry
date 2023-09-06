import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://sibiraj-s.github.io',
  base: '/react-layout-masonry',
  integrations: [
    starlight({
      title: 'React Layout Masonry',
      social: {
        github: 'https://github.com/sibiraj-s/react-layout-masonry',
      },
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
      customCss: ['./src/tailwind.css', './src/assets/styles.css'],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
});
