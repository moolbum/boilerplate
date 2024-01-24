import { HTMLAttributes } from 'react';

interface LocalIconProps extends HTMLAttributes<HTMLImageElement> {
  name: string;
  size: number;
  className?: string;
}

function LocalIcon({ name, size, className, ...rest }: LocalIconProps) {
  return (
    <img
      alt={name}
      src={name}
      width={size}
      height={size}
      className={className}
      style={{ cursor: !!rest.onClick ? 'pointer' : '', ...rest.style }}
      {...rest}
    />
  );
}

export default LocalIcon;
