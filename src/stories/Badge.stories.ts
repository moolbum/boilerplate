import type { Meta, StoryObj } from '@storybook/react';
import StorybookBadge from './Badge';

const meta = {
  title: 'Badge',
  component: StorybookBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['small', 'medium'],
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
      options: ['solid', 'soft', 'surface', 'outline'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof StorybookBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 'small',
    radius: 'small',
    variant: 'solid',
    color: 'blue',
    children: 'test',
  },
};
