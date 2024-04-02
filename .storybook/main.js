
/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
   stories: [
    '../src/components/**/*.stories.js', 
    '../src/components/**/*.mdx'],
   staticDirs: ['../public'],
   addons: [
     '@storybook/addon-links',
     '@storybook/addon-essentials',
     '@storybook/addon-interactions',
     "@chromatic-com/storybook",
   ],
   framework: {
     name: '@storybook/vue3-vite',
     options: {},
   },
   docs: {
    //👇 See the table below for the list of supported options
    autodocs: 'tag',
    defaultName: 'Overview',
  },
 };
 export default config;