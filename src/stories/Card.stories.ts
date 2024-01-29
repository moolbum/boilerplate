import type { Meta, StoryObj } from '@storybook/react';
import StorybookCard from './Card';

const meta = {
  title: 'Card',
  component: StorybookCard,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof StorybookCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 'small',
    children: 'test',
    fullWidth: false,
  },
};
