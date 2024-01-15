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
  let defaultBackground;
  let activeBackground;
  let hoverBackground;
  let fontColor;

  let outlineBadgeStyle;

  switch (color) {
    case 'blue':
      outlineBadgeStyle = css`
        background: ${colors.white};
        box-shadow: inset 0 0 0 1px ${colors.blue700};
        color: ${colors.blue1000};
      `;
      break;
    case 'gray':
      outlineBadgeStyle = css`
        background: ${colors.white};
        box-shadow: inset 0 0 0 1px ${colors.gray700};
        color: ${colors.gray1000};
      `;
      break;
    case 'green':
      outlineBadgeStyle = css`
        background: ${colors.white};
        box-shadow: inset 0 0 0 1px ${colors.green700};
        color: ${colors.green1000};
      `;
      break;
    case 'lime':
      outlineBadgeStyle = css`
        background: ${colors.white};
        box-shadow: inset 0 0 0 1px ${colors.lime700};
        color: ${colors.lime1000};
      `;
      break;
    case 'mint':
      outlineBadgeStyle = css`
        background: ${colors.white};
        box-shadow: inset 0 0 0 1px ${colors.mint700};
        color: ${colors.mint1000};
      `;
      break;
    case 'orange':
      outlineBadgeStyle = css`
        background: ${colors.white};
        box-shadow: inset 0 0 0 1px ${colors.orange700};
        color: ${colors.orange1000};
      `;
      break;
    case 'pink':
      outlineBadgeStyle = css`
        background: ${colors.white};
        box-shadow: inset 0 0 0 1px ${colors.pink700};
        color: ${colors.pink1000};
      `;
      break;
    case 'purple':
      outlineBadgeStyle = css`
        background: ${colors.white};
        box-shadow: inset 0 0 0 1px ${colors.purple700};
        color: ${colors.purple1000};
      `;
      break;
    case 'red':
      outlineBadgeStyle = css`
        background: ${colors.white};
        box-shadow: inset 0 0 0 1px ${colors.red700};
        color: ${colors.red1000};
      `;
      break;
    case 'sky':
      outlineBadgeStyle = css`
        background: ${colors.white};
        box-shadow: inset 0 0 0 1px ${colors.sky700};
        color: ${colors.sky1000};
      `;
      break;
    case 'yellow':
      outlineBadgeStyle = css`
        background: ${colors.white};
        box-shadow: inset 0 0 0 1px ${colors.yellow700};
        color: ${colors.yellow1000};
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
        background: ${colors.blue100};
        box-shadow: inset 0 0 0 1px ${colors.blue600};
        color: ${colors.blue1000};
      `;
      break;
    case 'gray':
      surfaceBadgeStyle = css`
        background: ${colors.gray100};
        box-shadow: inset 0 0 0 1px ${colors.gray600};
        color: ${colors.gray1000};
      `;
      break;
    case 'green':
      surfaceBadgeStyle = css`
        background: ${colors.green100};
        box-shadow: inset 0 0 0 1px ${colors.green600};
        color: ${colors.green1000};
      `;
      break;
    case 'lime':
      surfaceBadgeStyle = css`
        background: ${colors.lime100};
        box-shadow: inset 0 0 0 1px ${colors.lime600};
        color: ${colors.lime1000};
      `;
      break;
    case 'mint':
      surfaceBadgeStyle = css`
        background: ${colors.mint100};
        box-shadow: inset 0 0 0 1px ${colors.mint600};
        color: ${colors.mint1000};
      `;
      break;
    case 'orange':
      surfaceBadgeStyle = css`
        background: ${colors.white};
        box-shadow: inset 0 0 0 1px ${colors.orange600};
        color: ${colors.orange1000};
      `;
      break;
    case 'pink':
      surfaceBadgeStyle = css`
        background: ${colors.pink100};
        box-shadow: inset 0 0 0 1px ${colors.pink600};
        color: ${colors.pink1000};
      `;
      break;
    case 'purple':
      surfaceBadgeStyle = css`
        background: ${colors.purple100};
        box-shadow: inset 0 0 0 1px ${colors.purple600};
        color: ${colors.purple1000};
      `;
      break;
    case 'red':
      surfaceBadgeStyle = css`
        background: ${colors.red100};
        box-shadow: inset 0 0 0 1px ${colors.red600};
        color: ${colors.red1000};
      `;
      break;
    case 'sky':
      surfaceBadgeStyle = css`
        background: ${colors.sky100};
        box-shadow: inset 0 0 0 1px ${colors.sky600};
        color: ${colors.sky1000};
      `;
      break;
    case 'yellow':
      surfaceBadgeStyle = css`
        background: ${colors.yellow100};
        box-shadow: inset 0 0 0 1px ${colors.yellow600};
        color: ${colors.yellow1000};
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
