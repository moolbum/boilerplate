import type { Meta, StoryObj } from '@storybook/react';
import { colors, typography } from '@src/styles';
import StorybookTypo from './Typo';

const meta = {
  title: 'Typo',
  component: StorybookTypo,
  tags: ['autodocs'],
  argTypes: {
    typo: {
      options: Object.entries(typography).map(color => color[0]),
      control: { type: 'select' },
    },
    fontWeight: {
      options: ['regular', 'medium', 'semibold', 'bold'],
      control: { type: 'radio' },
    },
    color: {
      options: Object.entries(colors).map(color => color[0]),
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof StorybookTypo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Hello world',
    color: 'black',
    fontWeight: 'regular',
    typo: 'b2',
    isUnderLine: false,
    underLineThickness: 0,
    underlineOffset: 0,
  },
};
