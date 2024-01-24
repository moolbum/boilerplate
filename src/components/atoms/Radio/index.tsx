import React, { HTMLAttributes, forwardRef } from 'react';

const Radio = forwardRef<HTMLInputElement, HTMLAttributes<HTMLInputElement>>((props, forwardedRef) => {
  return <input ref={forwardedRef} type="radio" {...props} />;
});

export default Radio;
