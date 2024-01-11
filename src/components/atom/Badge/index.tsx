import React, { HTMLAttributes, forwardRef } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  return <span ref={ref} {...props} />;
});

export default Badge;
