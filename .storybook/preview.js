import '../src/index.css';

import { setup } from '@storybook/vue3';
import { createPinia } from 'pinia';

const pinia = createPinia();

// Setup the Vue app
setup((app) => {
  console.log('register pinia');
  app.use(pinia);
});

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#fff',
        },
        {
          name: 'dark',
          value: '#333',
        },
      ],
    },
  },
};

export default preview;