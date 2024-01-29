import type { Meta, StoryObj } from '@storybook/react';
import { colors } from '@/styles/color';
import StorybookCallout from './Callout';

const meta = {
  title: 'Callout',
  component: StorybookCallout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    backgroundColor: {
      options: Object.entries(colors).map(color => color[0]),
      control: { type: 'select' },
    },
    borderColor: {
      options: Object.entries(colors).map(color => color[0]),
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof StorybookCallout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 'medium',
    gap: 8,
    icon: '📌',
    children: 'Text',
    backgroundColor: 'gray100',
    borderColor: 'gray200',
  },
};
