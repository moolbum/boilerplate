import { ButtonHTMLAttributes } from 'react';
import { ButtonVariantType } from '@src/types/variant';
import { ButtonSizeType } from '@src/types/size';
import { AccentColorType, RadiusType } from '@src/styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSizeType;
  radius?: RadiusType;
  variant?: ButtonVariantType;
  color?: AccentColorType;
  fullWidth?: boolean;
}
