import React, { HTMLAttributes, forwardRef } from 'react';

interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, forwardedRef) => {
  return <textarea ref={forwardedRef} {...props} />;
});

export default TextArea;
