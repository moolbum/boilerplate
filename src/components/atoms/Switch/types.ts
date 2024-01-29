import { ColorType } from '@/styles/color';
import { CommonSizeType } from '@src/types/size';
import { InputHTMLAttributes } from 'react';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'> {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  color?: ColorType;
  unCheckedColor?: ColorType;
  disabledColor?: ColorType;
  size?: CommonSizeType;
}

export default SwitchProps;
