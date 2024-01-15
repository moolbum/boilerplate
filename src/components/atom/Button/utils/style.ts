import { AccentColorType, colors } from '@/styles/color';
import { ButtonSizeType } from '@/styles/size';
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
      defaultBackground = colors.blue900;
      fontColor = colors.white;
      break;
    case 'gray':
      defaultBackground = colors.gray900;
      fontColor = colors.white;
      break;
    case 'green':
      defaultBackground = colors.green900;
      fontColor = colors.white;
      break;
    case 'lime':
      defaultBackground = colors.lime900;
      fontColor = colors.lime1200;
      break;
    case 'mint':
      defaultBackground = colors.mint900;
      fontColor = colors.mint1200;
      break;
    case 'orange':
      defaultBackground = colors.orange900;
      fontColor = colors.white;
      break;
    case 'pink':
      defaultBackground = colors.pink900;
      fontColor = colors.white;
      break;
    case 'purple':
      defaultBackground = colors.purple900;
      fontColor = colors.white;
      break;
    case 'red':
      defaultBackground = colors.red900;
      fontColor = colors.white;
      break;
    case 'sky':
      defaultBackground = colors.sky900;
      fontColor = colors.sky1200;
      break;
    case 'yellow':
      defaultBackground = colors.yellow900;
      fontColor = colors.yellow1200;
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

  switch (color) {
    case 'blue':
      defaultBackground = colors.blue900;
      activeBackground = colors.blue700;
      hoverBackground = colors.blue600;
      break;
    case 'gray':
      defaultBackground = colors.gray900;
      activeBackground = colors.gray500;
      hoverBackground = colors.gray400;
      break;
    case 'green':
      defaultBackground = colors.green900;
      activeBackground = colors.green500;
      hoverBackground = colors.green400;
      break;
    case 'lime':
      defaultBackground = colors.lime900;
      activeBackground = colors.lime500;
      hoverBackground = colors.lime1100;
      break;
    case 'mint':
      defaultBackground = colors.mint900;
      activeBackground = colors.mint500;
      hoverBackground = colors.mint1100;
      break;
    case 'orange':
      defaultBackground = colors.orange900;
      activeBackground = colors.orange500;
      hoverBackground = colors.orange400;
      break;
    case 'pink':
      defaultBackground = colors.pink900;
      activeBackground = colors.pink500;
      hoverBackground = colors.pink400;
      break;
    case 'purple':
      defaultBackground = colors.purple900;
      activeBackground = colors.purple500;
      hoverBackground = colors.purple400;
      break;
    case 'red':
      defaultBackground = colors.red900;
      activeBackground = colors.red500;
      hoverBackground = colors.red400;
      break;
    case 'sky':
      defaultBackground = colors.sky900;
      activeBackground = colors.sky500;
      hoverBackground = colors.sky400;
      break;
    case 'yellow':
      defaultBackground = colors.yellow900;
      activeBackground = colors.yellow500;
      hoverBackground = colors.yellow400;
      break;
  }

  return css`
    border: none;
    cursor: pointer;
    background: ${defaultBackground};

    &:hover {
      background: ${hoverBackground};
    }
    &:active {
      background: ${activeBackground};
    }
  `;
};
// TODO
const getOutlineButtonStyle = (color: AccentColorType) => {
  let outlineBadgeStyle;

  switch (color) {
    case 'blue':
      outlineBadgeStyle = css`
        background: ${colors.white};
        box-shadow: inset 0 0 0 1px ${colors.blue800};
        color: ${colors.blue1100};
      `;
      break;
    case 'gray':
      outlineBadgeStyle = css`
        background: ${colors.white};
        box-shadow: inset 0 0 0 1px ${colors.gray800};
        color: ${colors.gray1100};
      `;
      break;
    case 'green':
      outlineBadgeStyle = css`
        background: ${colors.white};
        box-shadow: inset 0 0 0 1px ${colors.green800};
        color: ${colors.green1100};
      `;
      break;
    case 'lime':
      outlineBadgeStyle = css`
        background: ${colors.white};
        box-shadow: inset 0 0 0 1px ${colors.lime800};
        color: ${colors.lime1100};
      `;
      break;
    case 'mint':
      outlineBadgeStyle = css`
        background: ${colors.white};
        box-shadow: inset 0 0 0 1px ${colors.mint800};
        color: ${colors.mint1100};
      `;
      break;
    case 'orange':
      outlineBadgeStyle = css`
        background: ${colors.white};
        box-shadow: inset 0 0 0 1px ${colors.orange800};
        color: ${colors.orange1100};
      `;
      break;
    case 'pink':
      outlineBadgeStyle = css`
        background: ${colors.white};
        box-shadow: inset 0 0 0 1px ${colors.pink800};
        color: ${colors.pink1100};
      `;
      break;
    case 'purple':
      outlineBadgeStyle = css`
        background: ${colors.white};
        box-shadow: inset 0 0 0 1px ${colors.purple800};
        color: ${colors.purple1100};
      `;
      break;
    case 'red':
      outlineBadgeStyle = css`
        background: ${colors.white};
        box-shadow: inset 0 0 0 1px ${colors.red800};
        color: ${colors.red1100};
      `;
      break;
    case 'sky':
      outlineBadgeStyle = css`
        background: ${colors.white};
        box-shadow: inset 0 0 0 1px ${colors.sky800};
        color: ${colors.sky1100};
      `;
      break;
    case 'yellow':
      outlineBadgeStyle = css`
        background: ${colors.white};
        box-shadow: inset 0 0 0 1px ${colors.yellow800};
        color: ${colors.yellow1100};
      `;
      break;
  }

  return outlineBadgeStyle;
};

const getSurfaceButtonStyle = (color: AccentColorType) => {
  let surfaceBadgeStyle;

  switch (color) {
    case 'blue':
      surfaceBadgeStyle = css`
        background: ${colors.blue200};
        box-shadow: inset 0 0 0 1px ${colors.blue700};
        color: ${colors.blue1100};
      `;
      break;
    case 'gray':
      surfaceBadgeStyle = css`
        background: ${colors.gray200};
        box-shadow: inset 0 0 0 1px ${colors.gray700};
        color: ${colors.gray1100};
      `;
      break;
    case 'green':
      surfaceBadgeStyle = css`
        background: ${colors.green200};
        box-shadow: inset 0 0 0 1px ${colors.green700};
        color: ${colors.green1100};
      `;
      break;
    case 'lime':
      surfaceBadgeStyle = css`
        background: ${colors.lime200};
        box-shadow: inset 0 0 0 1px ${colors.lime700};
        color: ${colors.lime1100};
      `;
      break;
    case 'mint':
      surfaceBadgeStyle = css`
        background: ${colors.mint200};
        box-shadow: inset 0 0 0 1px ${colors.mint700};
        color: ${colors.mint1100};
      `;
      break;
    case 'orange':
      surfaceBadgeStyle = css`
        background: ${colors.white};
        box-shadow: inset 0 0 0 1px ${colors.orange700};
        color: ${colors.orange1100};
      `;
      break;
    case 'pink':
      surfaceBadgeStyle = css`
        background: ${colors.pink200};
        box-shadow: inset 0 0 0 1px ${colors.pink700};
        color: ${colors.pink1100};
      `;
      break;
    case 'purple':
      surfaceBadgeStyle = css`
        background: ${colors.purple200};
        box-shadow: inset 0 0 0 1px ${colors.purple700};
        color: ${colors.purple1100};
      `;
      break;
    case 'red':
      surfaceBadgeStyle = css`
        background: ${colors.red200};
        box-shadow: inset 0 0 0 1px ${colors.red700};
        color: ${colors.red1100};
      `;
      break;
    case 'sky':
      surfaceBadgeStyle = css`
        background: ${colors.sky200};
        box-shadow: inset 0 0 0 1px ${colors.sky700};
        color: ${colors.sky1100};
      `;
      break;
    case 'yellow':
      surfaceBadgeStyle = css`
        background: ${colors.yellow200};
        box-shadow: inset 0 0 0 1px ${colors.yellow700};
        color: ${colors.yellow1100};
      `;
      break;
  }

  return surfaceBadgeStyle;
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
      return;
  }
};

// getButtonSize
export const getButtonSize = (size: ButtonSizeType) => {
  switch (size) {
    case 'xSmall':
      return css`
        padding: 0 8px;
        ${typography.b6}
      `;
    case 'small':
      return css`
        padding: 0 12px;
        ${typography.b5}
      `;
    case 'medium':
      return css`
        padding: 0 16px;
        ${typography.b3}
      `;
    case 'large':
      return css`
        padding: 0 24px;
        ${typography.b1}
      `;
  }
};
