import React, { HTMLAttributes } from 'react';

interface RadioProps extends HTMLAttributes<HTMLInputElement> {}
function Radio(props: RadioProps) {
  return <input type="radio" {...props} />;
}

export default Radio;
