import type { Meta, StoryObj } from '@storybook/react';
import StorybookCheckboxGroup from './CheckboxGroup';

const meta = {
  title: 'CheckboxGroup',
  component: StorybookCheckboxGroup,
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
    name: { description: 'CheckboxGroup 필수값' },
  },
} satisfies Meta<typeof StorybookCheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    gap: 8,
    name: 'checkbox',
    direction: 'row',
    option: [
      { label: '체크박스_1', value: 'checkbox_1' },
      { label: '체크박스_2', value: 'checkbox_2' },
      {
        label: '체크박스_3',
        value: 'checkbox_3',
        disabled: true,
      },
      { label: '체크박스_4', value: 'checkbox_4' },
      { label: '체크박스_5', value: 'checkbox_5' },
      { label: '체크박스_6', value: 'checkbox_6' },
      { label: '체크박스_7', value: 'checkbox_7' },
      { label: '체크박스_8', value: 'checkbox_8' },
    ],
  },
};
