import React, { InputHTMLAttributes, forwardRef } from 'react';

const Radio = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, forwardedRef) => {
  return <input ref={forwardedRef} type="radio" {...props} />;
});

export default Radio;
