import type { Meta, StoryObj } from '@storybook/react';
import Swtich from './Swtich';

const meta = {
  title: 'Button',
  component: Swtich,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Swtich>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { checked: true },
};
