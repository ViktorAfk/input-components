import type { Meta, StoryObj } from '@storybook/react';
import { InputAnnotation } from '../components/InputAnnotation/InputAnnotation';

const meta: Meta<typeof InputAnnotation> = {
  component: InputAnnotation,
  argTypes: {
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
    error: {
      type: 'boolean',
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
      description: 'Disables the InputAnnotation when set to true.',
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
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputAnnotation>;

export const Hint: Story = {
  args: {
    errorMessage: "This field shouldn't be empty",
    description: 'Your name should have at least two characters',
    hint: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Hint.args,
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    ...Hint.args,
    hint: false,
    error: true,
  },
};

export const Overflow: Story = {
  args: {
    ...Hint.args,
  },
  render: (args) => (
    <div style={{ width: '100px' }}>
      <InputAnnotation {...args} />
    </div>
  ),
};
