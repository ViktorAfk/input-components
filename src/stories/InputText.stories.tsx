import type { Meta, StoryObj } from '@storybook/react';
import { fn, userEvent, within } from '@storybook/test';
import { InputText } from '../components/Input-text/InputText';

const meta: Meta<typeof InputText> = {
  component: InputText,
  argTypes: {
    quiet: {
      control: {
        type: 'boolean',
      },
      description: 'Quiet remove visible borders of the input',
    },
    placeholderText: {
      control: {
        type: 'text',
      },
      description: 'PlaceholderText gives possibility to enter text into input',
    },
    value: {
      control: {
        type: 'text',
      },
      description: 'The value shows a user’s entered text.',
    },
    onChange: {
      description: 'Function which receive event listener as an argument',
    },
    elementSize: {
      options: ['sm', 'medium', 'large', 'xl'],
      control: {
        type: 'select',
      },
      description:
        'Text fields come in four different sizes: extra small, medium, large, and extra-large. The medium size is the default and most frequently used option.',
    },
    textRight: {
      control: {
        type: 'boolean',
      },
      description: 'Move cursor to the right side of input',
    },
    error: {
      control: {
        type: 'boolean',
      },
      description:
        'Error state of the input field. If true, the input field is styled as an error. If a string is provided, the string is displayed as an error message below the input field.',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description:
        'Disables the input field when set to true. A disabled input field cannot be interacted with or focused, and its value cannot be changed.',
    },
    iconBefore: {
      control: {
        type: 'boolean',
      },
      description:
        'If set to true, an icon is displayed before the input placeholder. This is useful for indicating the type of input expected, such as a magnifying glass for search fields.',
    },
    iconAfter: {
      control: {
        type: 'boolean',
      },
      description:
        'If set to true, an icon is displayed after the input placeholder. This is useful for indicating additional actions or contextual information related to the input.',
    },
    shortKey: {
      control: {
        type: 'boolean',
      },
      description:
        'A boolean flag that enables a specific shortcut key behavior or configuration.',
    },
    labelPosition: {
      options: ['top', 'side'],
      control: {
        type: 'select',
      },
      description:
        'If the "Top", label is located about the textfield, It is the default position. "Side" , label is located in one line with input field',
    },
    required: {
      control: {
        type: 'boolean',
      },
      description:
        'Indicates that the input field is required. If set to true, the input must be filled out before the form can be submitted.',
    },
    inputStyles: {
      control: {
        type: 'object',
      },
      description:
        'Description: This prop allows you to customize the styling of the input field within the InputField component. It accepts an object that adheres to the React.CSSProperties type, giving you control over various CSS properties such as width, height, padding, border, font size, color, background color, and more. If this prop is not provided, the default styles for the input field will be applied.',
    },
  },
  args: {
    onChange: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputText>;

export const DefaultQuiet: Story = {
  args: {
    elementSize: 'medium',
    placeholderText: 'Enter your name',
    quiet: true,
  },
  render: (args) => {
    return (
      <div style={{ display: 'flex', gap: '10px' }}>
        <InputText {...args} />
        <InputText {...args} value={'John'} />
      </div>
    );
  },
};

export const Default: Story = {
  args: {
    placeholderText: 'Enter your name...',
    quiet: false,
  },
  render: (args) => {
    return (
      <div style={{ display: 'flex', gap: '10px' }}>
        <InputText {...args} />
        <InputText {...args} value={'John'} />
      </div>
    );
  },
};

export const Small: Story = {
  args: {
    elementSize: 'sm',
    placeholderText: 'Enter your name',
  },
  render: (args) => {
    return (
      <div style={{ display: 'flex', gap: '10px' }}>
        <InputText {...args} />
        <InputText {...args} value={'John'} />
      </div>
    );
  },
};

export const Large: Story = {
  args: {
    elementSize: 'large',
    placeholderText: 'Enter your name',
  },
  render: (args) => {
    return (
      <div style={{ display: 'flex', gap: '10px' }}>
        <InputText {...args} />
        <InputText {...args} value={'John'} />
      </div>
    );
  },
};

export const XLarge: Story = {
  args: {
    elementSize: 'xl',
    placeholderText: 'Enter your name',
  },
  render: (args) => {
    return (
      <div style={{ display: 'flex', gap: '10px' }}>
        <InputText {...args} />
        <InputText {...args} value={'John'} />
      </div>
    );
  },
};

export const IconBeforeState: Story = {
  args: {
    iconBefore: true,
  },
};

export const IconAfterState: Story = {
  args: {
    iconAfter: true,
  },
};

export const ShortKeyState: Story = {
  args: {
    shortKey: true,
  },
};

export const AllIconsState: Story = {
  args: {
    iconBefore: true,
    iconAfter: true,
    shortKey: true,
  },
};
export const Hover: Story = {
  args: {
    placeholderText: 'Enter your name',
    quiet: true,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const element = canvas.getByPlaceholderText('Enter your name');
    await userEvent.hover(element);
  },
};

export const ErrorState: Story = {
  args: {
    ...AllIconsState.args,
    error: true,
  },
};

export const DisabledState: Story = {
  args: {
    ...AllIconsState.args,
    disabled: true,
  },
};
