import type { Meta, StoryObj } from '@storybook/react';
import { colors } from '@src/styles';
import StorybookSwitch from './Swtich';

const meta = {
  title: 'Swtich',
  component: StorybookSwitch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    color: {
      options: Object.entries(colors).map(color => color[0]),
      control: { type: 'select' },
    },
    unCheckedColor: {
      options: Object.entries(colors).map(color => color[0]),
      control: { type: 'select' },
    },
    disabledColor: {
      options: Object.entries(colors).map(color => color[0]),
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof StorybookSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    disabled: false,
    size: 'small',
    color: 'blue800',
    unCheckedColor: 'gray500',
    disabledColor: 'gray700',
  },
};
