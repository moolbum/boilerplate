import type { Meta, StoryObj } from '@storybook/react';
import StorybookTextArea from './TextArea';

const meta = {
  title: 'TextArea',
  component: StorybookTextArea,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof StorybookTextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: 'Hello world',
  },
};
