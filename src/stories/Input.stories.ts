import type { Meta, StoryObj } from '@storybook/react';
import StoryBookInput from './Input';

const meta = {
  title: 'Input',
  component: StoryBookInput,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof StoryBookInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    prefix: '',
    suffix: '',
    fullWidth: true,
    allowClear: false,
    isError: false,
  },
};
