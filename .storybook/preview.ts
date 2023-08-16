import { Preview } from '@storybook/react';

import './tailwind.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(?:background|color)$/i,
        date: /Date$/,
        boolean: /(?:disabled|isInvalid)$/i,
      },
    },
  },
};

export default preview;
