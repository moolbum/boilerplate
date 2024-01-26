import React, { forwardRef } from 'react';
import TextAreaProps from './types';

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, forwardedRef) => {
  return <textarea ref={forwardedRef} {...props} />;
});

export default TextArea;
