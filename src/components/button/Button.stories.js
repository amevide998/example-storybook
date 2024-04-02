import MyButton from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/Core/Button',
  component: MyButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    onClick: {},
    size: {
      control: {
        type: 'inline-radio',
      },
      options: ['small', 'medium', 'large'],
    },
    label : {
      control: 'text', 
      description: 'Overwritten description',
    }
  },
  args : {
    label: 'Default Button',
  },
};



// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  component : MyButton,
  args: {
    primary: true,
    label : 'Primary'
  },
};

export const Secondary = {
  args: {
    label: 'Secondary',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Large',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'small',
  },
};

export const CustomParameter = {
  parameters: {
    backgrounds : {
      values: [
          { name: 'light', value: '#faa' },
          { name: 'dark', value: '#3dd' },
      ]
    },
    viewport : {
      defaultViewport : "mobile1"
    }
  },
};




// export const Text = {
//   render: () => ({
//     components: { MyButton },
//     setup() {
//       return {
//         onClick: action('clicked'),
//       };
//     },
//     template: '<Button label="Hello" @click="onClick" />',
//   }),
// };