import React, { forwardRef } from 'react';
import { ColorType, colors } from '@/styles/color';
import { borderRadius } from '@/styles/radius';
import { CommonSizeType } from '@src/types/size';
import { zIndex } from '@/styles/zIndex';
import styled from 'styled-components';
import { SwitchProps } from './types';

const Switch = forwardRef<HTMLDivElement, SwitchProps>((props, forwardedRef) => {
  const {
    checked,
    onChange,
    disabled,
    color = 'blue800',
    size = 'small',
    unCheckedColor = 'gray500',
    disabledColor = 'gray700',
    ...rest
  } = props;

  return (
    <SwitchComponent ref={forwardedRef} size={size} role="switch">
      <HiddenSwitch
        type="checkbox"
        checked={checked}
        data-checked={checked}
        disabled={disabled}
        onChange={e => {
          onChange?.(e.target.checked);
        }}
        {...rest}
      />
      <StyledSwitch
        size={size}
        data-checked={checked}
        data-disabled={disabled}
        onClick={() => !disabled && onChange?.(!checked)}
      />

      <SwitchSlider
        data-checked={checked}
        data-disabled={disabled}
        onClick={() => !disabled && onChange?.(!checked)}
        color={color}
        unCheckedColor={unCheckedColor}
        disabledColor={disabledColor}
        type="button"
      />
    </SwitchComponent>
  );
});

export default Switch;

const getSwitchSize = (size: CommonSizeType) => {
  let switchStyle;

  switch (size) {
    case 'small':
      switchStyle = {
        switchComponent: '50px',
        switch: '20px',
      };
      break;

    case 'medium':
      switchStyle = {
        switchComponent: '70px',
        switch: '30px',
      };
      break;

    case 'large':
      switchStyle = {
        switchComponent: '90px',
        switch: '40px',
      };
      break;
  }

  return switchStyle;
};

const SwitchComponent = styled.div<{ size: CommonSizeType }>`
  position: relative;
  display: flex;
  width: ${({ size }) => getSwitchSize(size).switchComponent};
`;

const HiddenSwitch = styled.input`
  position: relative;
  width: 0;
  height: 0;
  margin: 0;
  opacity: 0;
`;

const StyledSwitch = styled.div<{ size: CommonSizeType }>`
  position: relative;
  width: ${({ size }) => getSwitchSize(size).switch};
  height: ${({ size }) => getSwitchSize(size).switch};
  margin: 5px;
  background: ${colors.white};
  border-radius: ${borderRadius.full};
  z-index: ${zIndex.switch};
  transition: 0.3s;
  box-shadow: 0px 2px 4px ${colors.greyOpacity200};
  cursor: pointer;

  &[data-checked='true'] {
    transform: translateX(100%);
  }

  &[data-disabled='true'] {
    cursor: not-allowed;
  }
`;

const SwitchSlider = styled.button<{ unCheckedColor: ColorType; disabledColor: ColorType; color: ColorType }>`
  position: absolute;
  inset: 0;
  border: none;
  width: 100%;
  border-radius: 32px;
  background: ${({ unCheckedColor }) => colors[unCheckedColor]};
  z-index: ${zIndex.switch - 1};
  cursor: pointer;
  transition: 0.3s;

  &[data-checked='true'] {
    background: ${({ color }) => colors[color]};
  }

  &[data-disabled='true'] {
    cursor: not-allowed;
    background: ${({ disabledColor }) => colors[disabledColor]};
  }
`;
