import type { Meta, StoryObj } from '@storybook/react';
import StorybookButton from './Button';

const meta = {
  title: 'Button',
  component: StorybookButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['xSmall', 'small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    color: {
      options: ['gray', 'red', 'pink', 'orange', 'yellow', 'lime', 'green', 'mint', 'blue', 'sky', 'purple'],
      control: { type: 'select' },
    },
    radius: {
      options: ['none', 'small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['solid', 'soft', 'surface', 'outline', 'ghost'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof StorybookButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 'small',
    radius: 'small',
    variant: 'soft',
    color: 'blue',
    children: 'test',
    fullWidth: false,
  },
};
