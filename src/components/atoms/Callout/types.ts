import { ColorType } from '@/styles/color';
import { CalloutSizeType } from '@src/types/size';
import { HTMLAttributes, ReactNode } from 'react';

export interface CalloutProps extends HTMLAttributes<HTMLDivElement> {
  size?: CalloutSizeType;
  icon?: ReactNode;
  iconOnClick?: () => void;
  gap?: number;
  backgroundColor?: ColorType;
  borderColor?: ColorType;
  fullWidth?: boolean;
}
