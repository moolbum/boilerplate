import { AccentColorType, colors } from '@/styles/color';
import { ButtonSizeType } from '@src/types/size';
import { typography } from '@/styles/typography';
import { ButtonVariantType } from '@/styles/variant';
import { css } from 'styled-components';

// getButtonVariant;
const getSoftButtonStyle = (color: AccentColorType) => {
  let defaultBackground;
  let activeBackground;
  let hoverBackground;
  let fontColor;

  switch (color) {
    case 'blue':
      defaultBackground = colors.blue200;
      hoverBackground = colors.blue300;
      activeBackground = colors.blue400;
      fontColor = colors.blue1000;
      break;
    case 'gray':
      defaultBackground = colors.gray200;
      hoverBackground = colors.gray300;
      activeBackground = colors.gray400;
      fontColor = colors.gray1000;
      break;
    case 'green':
      defaultBackground = colors.green200;
      hoverBackground = colors.green300;
      activeBackground = colors.green400;
      fontColor = colors.green1000;
      break;
    case 'lime':
      defaultBackground = colors.lime200;
      hoverBackground = colors.lime300;
      activeBackground = colors.lime400;
      fontColor = colors.lime1000;
      break;
    case 'mint':
      defaultBackground = colors.mint200;
      hoverBackground = colors.mint300;
      activeBackground = colors.mint400;
      fontColor = colors.mint1000;
      break;
    case 'orange':
      defaultBackground = colors.orange200;
      hoverBackground = colors.orange300;
      activeBackground = colors.orange400;
      fontColor = colors.orange1000;
      break;
    case 'pink':
      defaultBackground = colors.pink200;
      hoverBackground = colors.pink300;
      activeBackground = colors.pink400;
      fontColor = colors.pink1000;
      break;
    case 'purple':
      defaultBackground = colors.purple200;
      hoverBackground = colors.purple300;
      activeBackground = colors.purple400;
      fontColor = colors.purple1000;
      break;
    case 'red':
      defaultBackground = colors.red200;
      hoverBackground = colors.red300;
      activeBackground = colors.red400;
      fontColor = colors.red1000;
      break;
    case 'sky':
      defaultBackground = colors.sky200;
      hoverBackground = colors.sky300;
      activeBackground = colors.sky400;
      fontColor = colors.sky1000;
      break;
    case 'yellow':
      defaultBackground = colors.yellow200;
      hoverBackground = colors.yellow300;
      activeBackground = colors.yellow400;
      fontColor = colors.yellow1000;
      break;
  }

  return css`
    border: none;
    cursor: pointer;
    color: ${fontColor};
    background: ${defaultBackground};

    &:hover {
      background: ${hoverBackground};
    }
    &:active {
      background: ${activeBackground};
    }
  `;
};
const getSolidButtonStyle = (color: AccentColorType) => {
  let defaultBackground;
  let activeBackground;
  let hoverBackground;
  let fontColor;

  switch (color) {
    case 'blue':
      defaultBackground = colors.blue800;
      hoverBackground = colors.blue900;
      activeBackground = colors.blue1000;
      fontColor = colors.blue1100;
      break;
    case 'gray':
      defaultBackground = colors.gray800;
      hoverBackground = colors.gray900;
      activeBackground = colors.gray1000;
      fontColor = colors.gray1100;
      break;
    case 'green':
      defaultBackground = colors.green800;
      hoverBackground = colors.green900;
      activeBackground = colors.green1000;
      fontColor = colors.green1100;
      break;
    case 'lime':
      defaultBackground = colors.lime800;
      hoverBackground = colors.lime900;
      activeBackground = colors.lime1000;
      fontColor = colors.lime1100;
      break;
    case 'mint':
      defaultBackground = colors.mint800;
      hoverBackground = colors.mint900;
      activeBackground = colors.mint1000;
      fontColor = colors.mint1100;
      break;
    case 'orange':
      defaultBackground = colors.orange800;
      hoverBackground = colors.orange900;
      activeBackground = colors.orange1000;
      fontColor = colors.orange1100;
      break;
    case 'pink':
      defaultBackground = colors.pink800;
      hoverBackground = colors.pink900;
      activeBackground = colors.pink1000;
      fontColor = colors.pink1100;
      break;
    case 'purple':
      defaultBackground = colors.purple800;
      hoverBackground = colors.purple900;
      activeBackground = colors.purple1000;
      fontColor = colors.purple1100;
      break;
    case 'red':
      defaultBackground = colors.red800;
      hoverBackground = colors.red900;
      activeBackground = colors.red1000;
      fontColor = colors.red1100;
      break;
    case 'sky':
      defaultBackground = colors.sky800;
      hoverBackground = colors.sky900;
      activeBackground = colors.sky1000;
      fontColor = colors.sky1100;
      break;
    case 'yellow':
      defaultBackground = colors.yellow800;
      hoverBackground = colors.yellow900;
      activeBackground = colors.yellow1000;
      fontColor = colors.yellow1100;
      break;
  }

  return css`
    border: none;
    cursor: pointer;
    background: ${defaultBackground};
    color: ${fontColor};

    &:hover {
      background: ${hoverBackground};
    }
    &:active {
      background: ${activeBackground};
    }
  `;
};
const getOutlineButtonStyle = (color: AccentColorType) => {
  let defaultBackground = colors.white;
  let defaultBoxShadow;
  let activeBackground;
  let hoverBackground;
  let fontColor;

  switch (color) {
    case 'blue':
      defaultBoxShadow = `inset 0 0 0 1px ${colors.blue700}`;
      hoverBackground = colors.blue100;
      activeBackground = colors.blue200;
      fontColor = colors.blue1000;
      break;

    case 'gray':
      defaultBoxShadow = `inset 0 0 0 1px ${colors.gray700}`;
      hoverBackground = colors.gray100;
      activeBackground = colors.gray200;
      fontColor = colors.gray1000;
      break;
    case 'green':
      defaultBoxShadow = `inset 0 0 0 1px ${colors.green700}`;
      hoverBackground = colors.green100;
      activeBackground = colors.green200;
      fontColor = colors.green1000;
      break;
    case 'lime':
      defaultBoxShadow = `inset 0 0 0 1px ${colors.lime700}`;
      hoverBackground = colors.lime100;
      activeBackground = colors.lime200;
      fontColor = colors.lime1000;
      break;
    case 'mint':
      defaultBoxShadow = `inset 0 0 0 1px ${colors.mint700}`;
      hoverBackground = colors.mint100;
      activeBackground = colors.mint200;
      fontColor = colors.mint1000;
      break;
    case 'orange':
      defaultBoxShadow = `inset 0 0 0 1px ${colors.orange700}`;
      hoverBackground = colors.orange100;
      activeBackground = colors.orange200;
      fontColor = colors.orange1000;
      break;
    case 'pink':
      defaultBoxShadow = `inset 0 0 0 1px ${colors.pink700}`;
      hoverBackground = colors.pink100;
      activeBackground = colors.pink200;
      fontColor = colors.pink1000;
      break;
    case 'purple':
      defaultBoxShadow = `inset 0 0 0 1px ${colors.purple700}`;
      hoverBackground = colors.purple100;
      activeBackground = colors.purple200;
      fontColor = colors.purple1000;
      break;
    case 'red':
      defaultBoxShadow = `inset 0 0 0 1px ${colors.red700}`;
      hoverBackground = colors.red100;
      activeBackground = colors.red200;
      fontColor = colors.red1000;
      break;
    case 'sky':
      defaultBoxShadow = `inset 0 0 0 1px ${colors.sky700}`;
      hoverBackground = colors.sky100;
      activeBackground = colors.sky200;
      fontColor = colors.sky1000;
      break;
    case 'yellow':
      defaultBoxShadow = `inset 0 0 0 1px ${colors.yellow700}`;
      hoverBackground = colors.yellow100;
      activeBackground = colors.yellow200;
      fontColor = colors.yellow1000;
      break;
  }

  return css`
    border: none;
    cursor: pointer;
    background: ${defaultBackground};
    color: ${fontColor};
    box-shadow: ${defaultBoxShadow};

    &:hover {
      background: ${hoverBackground};
    }
    &:active {
      background: ${activeBackground};
    }
  `;
};
const getSurfaceButtonStyle = (color: AccentColorType) => {
  let defaultBackground;
  let defaultBoxShadow;
  let activeBackground;
  let hoverBackground;
  let fontColor;

  switch (color) {
    case 'blue':
      defaultBoxShadow = `inset 0 0 0 1px ${colors.blue700}`;
      defaultBackground = colors.blue100;
      hoverBackground = colors.blue200;
      activeBackground = colors.blue300;
      fontColor = colors.blue1000;
      break;
    case 'gray':
      defaultBoxShadow = `inset 0 0 0 1px ${colors.gray700}`;
      defaultBackground = colors.gray100;
      hoverBackground = colors.gray200;
      activeBackground = colors.gray300;
      fontColor = colors.gray1000;
      break;
    case 'green':
      defaultBoxShadow = `inset 0 0 0 1px ${colors.green700}`;
      defaultBackground = colors.green100;
      hoverBackground = colors.green200;
      activeBackground = colors.green300;
      fontColor = colors.green1000;
      break;
    case 'lime':
      defaultBoxShadow = `inset 0 0 0 1px ${colors.lime700}`;
      defaultBackground = colors.lime100;
      hoverBackground = colors.lime200;
      activeBackground = colors.lime300;
      fontColor = colors.lime1000;
      break;
    case 'mint':
      defaultBoxShadow = `inset 0 0 0 1px ${colors.mint700}`;
      defaultBackground = colors.mint100;
      hoverBackground = colors.mint200;
      activeBackground = colors.mint300;
      fontColor = colors.mint1000;
      break;
    case 'orange':
      defaultBoxShadow = `inset 0 0 0 1px ${colors.orange700}`;
      defaultBackground = colors.orange100;
      hoverBackground = colors.orange200;
      activeBackground = colors.orange300;
      fontColor = colors.orange1000;
      break;
    case 'pink':
      defaultBoxShadow = `inset 0 0 0 1px ${colors.pink700}`;
      defaultBackground = colors.pink100;
      hoverBackground = colors.pink200;
      activeBackground = colors.pink300;
      fontColor = colors.pink1000;
      break;
    case 'purple':
      defaultBoxShadow = `inset 0 0 0 1px ${colors.purple700}`;
      defaultBackground = colors.purple100;
      hoverBackground = colors.purple200;
      activeBackground = colors.purple300;
      fontColor = colors.purple1000;
      break;
    case 'red':
      defaultBoxShadow = `inset 0 0 0 1px ${colors.red700}`;
      defaultBackground = colors.red100;
      hoverBackground = colors.red200;
      activeBackground = colors.red300;
      fontColor = colors.red1000;
      break;
    case 'sky':
      defaultBoxShadow = `inset 0 0 0 1px ${colors.sky700}`;
      defaultBackground = colors.sky100;
      hoverBackground = colors.sky200;
      activeBackground = colors.sky300;
      fontColor = colors.sky1000;
      break;
    case 'yellow':
      defaultBoxShadow = `inset 0 0 0 1px ${colors.yellow700}`;
      defaultBackground = colors.yellow100;
      hoverBackground = colors.yellow200;
      activeBackground = colors.yellow300;
      fontColor = colors.yellow1000;
      break;
  }

  return css`
    border: none;
    cursor: pointer;
    background: ${defaultBackground};
    color: ${fontColor};
    box-shadow: ${defaultBoxShadow};

    &:hover {
      background: ${hoverBackground};
    }
    &:active {
      background: ${activeBackground};
    }
  `;
};
const getGhostButtonStyle = (color: AccentColorType) => {
  let defaultBackground = colors.white;
  let activeBackground;
  let hoverBackground;
  let fontColor;

  switch (color) {
    case 'blue':
      hoverBackground = colors.blue200;
      activeBackground = colors.blue300;
      fontColor = colors.blue1000;
      break;
    case 'gray':
      hoverBackground = colors.gray200;
      activeBackground = colors.gray300;
      fontColor = colors.gray1000;
      break;
    case 'green':
      hoverBackground = colors.green200;
      activeBackground = colors.green300;
      fontColor = colors.green1000;
      break;
    case 'lime':
      hoverBackground = colors.lime200;
      activeBackground = colors.lime300;
      fontColor = colors.lime1000;
      break;
    case 'mint':
      hoverBackground = colors.mint200;
      activeBackground = colors.mint300;
      fontColor = colors.mint1000;
      break;
    case 'orange':
      hoverBackground = colors.orange200;
      activeBackground = colors.orange300;
      fontColor = colors.orange1000;
      break;
    case 'pink':
      hoverBackground = colors.pink200;
      activeBackground = colors.pink300;
      fontColor = colors.pink1000;
      break;
    case 'purple':
      hoverBackground = colors.purple200;
      activeBackground = colors.purple300;
      fontColor = colors.purple1000;
      break;
    case 'red':
      hoverBackground = colors.red200;
      activeBackground = colors.red300;
      fontColor = colors.red1000;
      break;
    case 'sky':
      hoverBackground = colors.sky200;
      activeBackground = colors.sky300;
      fontColor = colors.sky1000;
      break;
    case 'yellow':
      hoverBackground = colors.yellow200;
      activeBackground = colors.yellow300;
      fontColor = colors.yellow1000;
      break;
  }

  return css`
    border: none;
    cursor: pointer;
    background: ${defaultBackground};
    color: ${fontColor};

    &:hover {
      background: ${hoverBackground};
    }
    &:active {
      background: ${activeBackground};
    }
  `;
};

export const getButtonVariant = (variant: ButtonVariantType, color: AccentColorType) => {
  switch (variant) {
    case 'soft':
      return getSoftButtonStyle(color);
    case 'solid':
      return getSolidButtonStyle(color);
    case 'outline':
      return getOutlineButtonStyle(color);
    case 'surface':
      return getSurfaceButtonStyle(color);
    case 'ghost':
      return getGhostButtonStyle(color);
  }
};

// getButtonSize
export const getButtonSize = (size: ButtonSizeType) => {
  let paddingSize;
  let typo;

  switch (size) {
    case 'xSmall':
      paddingSize = '0 8px';
      typo = typography.b6;
      break;

    case 'small':
      paddingSize = '0 12px';
      typo = typography.b5;
      break;

    case 'medium':
      paddingSize = '0 16px';
      typo = typography.b3;
      break;

    case 'large':
      paddingSize = '0 24px';
      typo = typography.b1;
      break;
  }

  return css`
    padding: ${paddingSize};
    ${typo}
  `;
};
