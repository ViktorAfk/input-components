import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { InputGroup } from '../components/InputGroup/InputGroup';

const meta: Meta<typeof InputGroup> = {
  component: InputGroup,
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
    description: {
      type: 'string',
      control: {
        type: 'text',
      },
      description: 'This props provide help text for the user',
    },
    errorMessage: {
      type: 'string',
      control: {
        type: 'text',
      },
      description: 'This prop provide error message',
    },
    hint: {
      type: 'boolean',
      control: {
        type: 'boolean',
      },
      description:
        'Hint state of the Annotation field. If true, annotation shows help message.',
    },
    errorStyle: {
      control: {
        type: 'object',
      },
      description:
        'This prop allows you to customize the styling of the error message displayed by the InputField component. It accepts an object that adheres to the React.CSSProperties type, which you can use to apply specific CSS styles, such as font color, size, margin, and other CSS properties. If this prop is not provided, the default styles for the error message will be applied.',
    },
    descriptionStyle: {
      control: {
        type: 'object',
      },
      description:
        'This prop enables you to apply custom styles to the description text associated with the InputField component. Like errorStyle, it accepts an object that follows the React.CSSProperties type. This allows you to define specific CSS properties such as font style, color, padding, and more. If this prop is not specified, the component will use its default description styles.',
    },
    labelStyles: {
      control: {
        type: 'object',
      },
      description:
        'This prop allows you to apply custom styles to the label associated with the InputField component. It accepts an object that adheres to the React.CSSProperties type, enabling you to define specific CSS properties such as font size, color, margin, alignment, and more. If you do not provide this prop, the component will use its default styles for the label.',
    },
    inputStyles: {
      control: {
        type: 'object',
      },
      description:
        'Description: This prop allows you to customize the styling of the input field within the InputField component. It accepts an object that adheres to the React.CSSProperties type, giving you control over various CSS properties such as width, height, padding, border, font size, color, background color, and more. If this prop is not provided, the default styles for the input field will be applied.',
    },
    inputProps: {
      control: {
        type: 'object',
      },
      description:
        'Description: This prop is used to pass additional properties to the input field within the InputField component. It accepts an object that can include any props that are part of DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & React.DOMAttributes<HTMLInputElement>. Essentially, this allows you to specify various standard HTML attributes and React DOM attributes for the Input element, such as onFocus, onBlur, type, autoComplete, and more.',
    },
    labelProps: {
      control: {
        type: 'object',
      },
      description:
        'This prop is used to pass additional properties to the label element within the InputField component. It accepts an object that can include any props that are part of DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> & React.DOMAttributes<HTMLLabelElement>. This allows you to specify various standard HTML attributes and React DOM attributes for the <label> element, such as id, onClick, style, and more.',
    },
  },
  args: {
    onChange: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputGroup>;

export const Default: Story = {
  args: {
    labelProps: {
      htmlFor: 'email',
    },
    inputProps: {
      id: 'email',
    },
    labelText: 'Email',
    placeholderText: 'Input',
    infoIcon: {
      visibility: 'always',
      infoMessage: 'Enter your email',
    },
    textField: {
      fieldOption: 'optional',
      value: 'none',
    },
    iconBefore: true,
    iconAfter: true,
    shortKey: true,
    hint: true,
    description: 'Please enter your email for sign in',
    errorMessage: "This field shouldn't be empty",
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    hint: false,
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const LabelSide: Story = {
  args: {
    ...Default.args,
    labelPosition: 'side',
  },
};

export const SmallLabelSide: Story = {
  args: {
    ...LabelSide.args,
    hint: false,
  },
  render: (args) => (
    <div style={{ width: '200px' }}>
      {' '}
      <InputGroup {...args} />
    </div>
  ),
};

export const DarkDefault: Story = {
  args: {
    labelProps: {
      htmlFor: 'email',
    },
    inputProps: {
      id: 'email',
    },
    labelText: 'Email',
    placeholderText: 'Input',
    infoIcon: {
      visibility: 'always',
      infoMessage: 'Enter your email',
    },
    textField: {
      fieldOption: 'optional',
      value: 'none',
    },
    iconBefore: true,
    iconAfter: true,
    shortKey: true,
    hint: true,
    description: 'Please enter your email for sign in',
    errorMessage: "This field shouldn't be empty",
  },
  render: (args) => (
    <div className="dark--schema" style={{ height: '200px', padding: '50px' }}>
      <InputGroup {...args} />
    </div>
  ),
};

export const DarkError: Story = {
  args: {
    ...DarkDefault.args,
    hint: false,
    error: true,
  },
  render: (args) => (
    <div
      className={'dark--schema'}
      style={{ height: '200px', padding: '50px' }}
    >
      <InputGroup {...args} />
    </div>
  ),
};

export const DarkDisabled: Story = {
  args: {
    ...DarkDefault.args,
    disabled: true,
  },
  render: (args) => (
    <div
      className={'dark--schema'}
      style={{ height: '200px', padding: '50px' }}
    >
      <InputGroup {...args} />
    </div>
  ),
};
