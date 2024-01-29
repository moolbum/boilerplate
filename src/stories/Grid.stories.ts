import type { Meta, StoryObj } from '@storybook/react';
import StorybookGrid from './Grid';

const meta = {
  title: 'Grid',
  component: StorybookGrid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof StorybookGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    rowGap: 8,
    columnGap: 8,
    columnCount: 12,
    fullWidth: false,
    columnSpan: 3,
  },
};
