import { AccentColorType } from '@/styles/color';
import { RadiusType } from '@/styles/radius';
import { ButtonVariantType } from '@/styles/variant';
import { ButtonSizeType } from '@src/types/size';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSizeType;
  radius?: RadiusType;
  variant?: ButtonVariantType;
  color?: AccentColorType;
  fullWidth?: boolean;
}

export default ButtonProps;
