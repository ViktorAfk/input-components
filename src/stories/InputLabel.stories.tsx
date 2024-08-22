import type { Meta, StoryObj } from '@storybook/react';
import { InputLabel } from '../components/InputLabel/InputLabel';

const meta: Meta<typeof InputLabel> = {
  component: InputLabel,
  argTypes: {
    elementSize: {
      options: ['sm', 'medium'],
      control: {
        type: 'multi-select',
      },
      description:
        'Label fields come in two different sizes: small, medium. The medium size is the default and most frequently used option.',
    },
    labelText: {
      control: {
        type: 'text',
      },
      description: 'This props provide label name',
    },
    textField: {
      control: {
        type: 'select',
      },
      options: ['required', 'asterisk', 'optional', 'none'],
      description:
        'The textField prop configures whether a text field is required or optional, and specifies the display style for this status. The prop accepts one of four options, categorized into two types: RequiredTextField and OptionalTextField.',
      mapping: {
        required: { fieldOption: 'required', value: 'required' },
        asterisk: { fieldOption: 'required', value: 'asterisk' },
        optional: { fieldOption: 'optional', value: 'optional' },
        none: { fieldOption: 'optional', value: 'none' },
      },
    },
    infoIcon: {
      control: {
        type: 'object',
      },
      description:
        'This icon can stand alone or appear on hover only, enhancing the cleanliness of the layout and design.',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description:
        'Disables the label field when set to true. A disabled label field cannot be interacted with or focused.',
    },
    labelPosition: {
      options: ['top', 'side'],
      control: {
        type: 'select',
      },
      description:
        'If the "Top", label is located about the textfield, It is the default position. "Side" , label is located in one line with input field',
    },
    labelStyles: {
      control: {
        type: 'object',
      },
      description:
        'This prop allows you to apply custom styles to the label associated with the InputField component. It accepts an object that adheres to the React.CSSProperties type, enabling you to define specific CSS properties such as font size, color, margin, alignment, and more. If you do not provide this prop, the component will use its default styles for the label.',
    },
  },
  args: {
    textField: {
      fieldOption: 'optional',
      value: 'none',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputLabel>;

export const Default: Story = {
  args: {
    elementSize: 'medium',
    labelText: 'Name',
    labelPosition: 'top',
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    elementSize: 'sm',
  },
};

export const Optional: Story = {
  args: {
    ...Default.args,
    textField: {
      fieldOption: 'optional',
      value: 'optional',
    },
  },
};

export const Required: Story = {
  args: {
    ...Default.args,
    textField: {
      fieldOption: 'required',
      value: 'required',
    },
  },
};

export const Asterisk: Story = {
  args: {
    ...Default.args,
    textField: {
      fieldOption: 'required',
      value: 'asterisk',
    },
  },
};

export const InfoIcon: Story = {
  args: {
    ...Default.args,
    infoIcon: {
      visibility: 'always',
      infoMessage: 'Enter your email',
    },
  },
};

export const InfoIconHover: Story = {
  args: {
    ...Default.args,
    infoIcon: {
      visibility: 'hover',
      infoMessage: 'Enter your email',
    },
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    textField: {
      fieldOption: 'optional',
      value: 'optional',
    },
    disabled: true,
  },
};

export const Overflow: Story = {
  args: {
    ...Default.args,
    textField: {
      fieldOption: 'optional',
      value: 'optional',
    },
    labelText: "Please enter your name, don't shine",
  },
  render: (args) => {
    return (
      <div style={{ width: '100px' }}>
        <InputLabel {...args} />
      </div>
    );
  },
};
