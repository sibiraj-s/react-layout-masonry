import { fileURLToPath } from 'node:url';

import { defineConfig } from 'astro/config';
import type { AstroIntegration } from 'astro';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// `client:delay={ms}` hydrates a component after a delay, used to demo server-rendered fallbacks
const delayDirective: AstroIntegration = {
  name: 'client:delay',
  hooks: {
    'astro:config:setup': ({ addClientDirective }) => {
      addClientDirective({
        name: 'delay',
        entrypoint: fileURLToPath(new URL('./src/directives/delay.ts', import.meta.url)),
      });
    },
  },
};

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
          items: [{ autogenerate: { directory: 'examples' } }],
        },
      ],
      customCss: ['./src/styles/tailwind.css'],
    }),
    react(),
    delayDirective,
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
