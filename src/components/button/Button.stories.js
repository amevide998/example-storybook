import MyButton from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/Core/Button',
  component: MyButton,
  tags: ['autodocs'],
  argTypes: {
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

export const MobileScreen = {
  parameters: {
    viewport : {
      defaultViewport : "mobile1"
    }
  },
};


export const DecoratorButton = {
 decorators: [
   (story) => ({
     components: { story },
     template: '<div style="margin: 3em; border= 1px solid red"><story /></div>',
   }),
 ],
};
