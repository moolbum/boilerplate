import { ColorType } from '@/styles/color';
import { CalloutSizeType } from '@src/types/size';
import { HTMLAttributes, ReactNode } from 'react';

interface CalloutProps extends HTMLAttributes<HTMLDivElement> {
  size?: CalloutSizeType;
  icon?: ReactNode;
  iconOnClick?: () => void;
  gap?: number;
  backgroundColor?: ColorType;
  borderColor?: ColorType;
  fullWidth?: boolean;
}

export default CalloutProps;
