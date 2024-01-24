import React from 'react';
import * as icons from '@radix-ui/react-icons';
import { IconProps } from '@radix-ui/react-icons/dist/types';
import { ColorType, colors } from '@/styles/color';

export interface RadixIconProps extends IconProps {
  name: keyof typeof icons;
  size?: number;
  color?: ColorType;
}

function RadixIcon({ name, size = 16, color = 'black', ...props }: RadixIconProps) {
  const SelectRadixIcon = icons[name];

  return (
    <SelectRadixIcon
      width={size}
      height={size}
      style={{ cursor: !!props.onClick ? 'pointer' : '', ...props.style }}
      {...props}
      color={colors[color]}
    />
  );
}

export default RadixIcon;
