import { InputHTMLAttributes } from 'react';
import { ColorType } from '@src/styles';
import { CommonSizeType } from '@src/types/size';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'> {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  color?: ColorType;
  unCheckedColor?: ColorType;
  disabledColor?: ColorType;
  size?: CommonSizeType;
}
