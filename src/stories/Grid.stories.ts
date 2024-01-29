import type { Meta, StoryObj } from '@storybook/react';
import StorybookFlex from './Flex';

const meta = {
  title: 'Grid',
  component: StorybookFlex,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      options: [
        'column',
        'column-reverse',
        'row',
        'row-reverse',
        '-moz-initial',
        'inherit',
        'initial',
        'revert',
        'revert-layer',
        'unset',
      ],
      control: { type: 'radio' },
    },
    align: {
      options: [
        'baseline',
        'normal',
        'center',
        'end',
        'flex-end',
        'flex-start',
        'self-end',
        'self-start',
        'start',
        'stretch',
        '-moz-initial',
        'inherit',
        'initial',
        'revert',
        'revert-layer',
        'unset',
      ],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof StorybookFlex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    gap: 8,
    direction: 'row',
    align: 'baseline',
  },
};
