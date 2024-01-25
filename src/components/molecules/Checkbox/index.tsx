import React, { InputHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, forwardedRef) => {
  const { ...rest } = props;

  return (
    <CheckboxCompoent>
      <input ref={forwardedRef} {...rest} />
    </CheckboxCompoent>
  );
});

export default Checkbox;

const CheckboxCompoent = styled.div``;
