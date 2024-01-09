import { ColorType, colors } from '@/src/styles/color';
import { icons } from 'lucide-react';
import { HTMLAttributes } from 'react';

export interface LucideIconProps extends HTMLAttributes<HTMLOrSVGElement> {
  name: keyof typeof icons;
  color?: ColorType;
  size?: number;
}

const LucideIcon = ({ name, color = 'black', size = 16, ...props }: LucideIconProps) => {
  const SelectLucideIcon = icons[name];

  return (
    <SelectLucideIcon
      color={colors[color]}
      size={size}
      style={{ cursor: !!props.onClick ? 'pointer' : '', ...props.style }}
      {...props}
    />
  );
};

export default LucideIcon;
