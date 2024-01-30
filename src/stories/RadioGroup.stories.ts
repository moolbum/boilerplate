import type { Meta, StoryObj } from '@storybook/react';
import StorybookRadioGroup from './RadioGroup';

const meta = {
  title: 'Radio',
  component: StorybookRadioGroup,
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
  },
} satisfies Meta<typeof StorybookRadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    gap: 8,
    name: 'radio',
    direction: 'row',
    option: [
      { label: '라벨_1', value: '10' },
      { label: '라벨_2', value: '20' },
      { label: '라벨_3', value: '30' },
      { label: '라벨_4', value: '40', disabled: true },
    ],
  },
};
