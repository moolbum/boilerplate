import React, { HTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  return <span ref={ref} {...props} />;
});

export default Badge;

const Container = styled.div``;
