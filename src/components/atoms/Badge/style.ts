import { AccentColorType, colors } from '@/styles/color';
import { BadgeSizeType } from '@src/types/size';
import { typography } from '@/styles/typography';
import { BadgeVariantType } from '@/styles/variant';
import { css } from 'styled-components';

// getBadgeVariant;
const getSoftBadgeStyle = (color: AccentColorType) => {
  let defaultBackground;
  let fontColor;

  switch (color) {
    case 'blue':
      defaultBackground = colors.blue200;
      fontColor = colors.blue1000;
      break;
    case 'gray':
      defaultBackground = colors.gray200;
      fontColor = colors.gray1000;
      break;
    case 'green':
      defaultBackground = colors.green200;
      fontColor = colors.green1000;
      break;
    case 'lime':
      defaultBackground = colors.lime200;
      fontColor = colors.lime1000;
      break;
    case 'mint':
      defaultBackground = colors.mint200;
      fontColor = colors.mint1000;
      break;
    case 'orange':
      defaultBackground = colors.orange200;
      fontColor = colors.orange1000;
      break;
    case 'pink':
      defaultBackground = colors.pink200;
      fontColor = colors.pink1000;
      break;
    case 'purple':
      defaultBackground = colors.purple200;
      fontColor = colors.purple1000;
      break;
    case 'red':
      defaultBackground = colors.red200;
      fontColor = colors.red1000;
      break;
    case 'sky':
      defaultBackground = colors.sky200;
      fontColor = colors.sky1000;
      break;
    case 'yellow':
      defaultBackground = colors.yellow200;
      fontColor = colors.yellow1000;
      break;
  }

  return css`
    background: ${defaultBackground};
    color: ${fontColor};
  `;
};
const getOutlineBadgeStyle = (color: AccentColorType) => {
  let defaultBackground;
  let defaultBoxShadow;
  let fontColor;

  switch (color) {
    case 'blue':
      defaultBackground = colors.white;
      defaultBoxShadow = `inset 0 0 0 1px ${colors.blue700}`;
      fontColor = colors.blue1000;
      break;
    case 'gray':
      defaultBackground = colors.white;
      defaultBoxShadow = `inset 0 0 0 1px ${colors.gray700}`;
      fontColor = colors.gray1000;
      break;
    case 'green':
      defaultBackground = colors.white;
      defaultBoxShadow = `inset 0 0 0 1px ${colors.green700}`;
      fontColor = colors.green1000;
      break;
    case 'lime':
      defaultBackground = colors.white;
      defaultBoxShadow = `inset 0 0 0 1px ${colors.lime700}`;
      fontColor = colors.lime1000;
      break;
    case 'mint':
      defaultBackground = colors.white;
      defaultBoxShadow = `inset 0 0 0 1px ${colors.mint700}`;
      fontColor = colors.mint1000;
      break;
    case 'orange':
      defaultBackground = colors.white;
      defaultBoxShadow = `inset 0 0 0 1px ${colors.orange700}`;
      fontColor = colors.orange1000;
      break;
    case 'pink':
      defaultBackground = colors.white;
      defaultBoxShadow = `inset 0 0 0 1px ${colors.pink700}`;
      fontColor = colors.pink1000;
      break;
    case 'purple':
      defaultBackground = colors.white;
      defaultBoxShadow = `inset 0 0 0 1px ${colors.purple700}`;
      fontColor = colors.purple1000;
      break;
    case 'red':
      defaultBackground = colors.white;
      defaultBoxShadow = `inset 0 0 0 1px ${colors.red700}`;
      fontColor = colors.red1000;
      break;
    case 'sky':
      defaultBackground = colors.white;
      defaultBoxShadow = `inset 0 0 0 1px ${colors.sky700}`;
      fontColor = colors.sky1000;
      break;
    case 'yellow':
      defaultBackground = colors.white;
      defaultBoxShadow = `inset 0 0 0 1px ${colors.yellow700}`;
      fontColor = colors.yellow1000;
      break;
  }

  return css`
    border: none;
    background: ${defaultBackground};
    color: ${fontColor};
    box-shadow: ${defaultBoxShadow};
  `;
};
const getSolidBadgeStyle = (color: AccentColorType) => {
  let defaultBackground;
  let fontColor;

  switch (color) {
    case 'blue':
      defaultBackground = colors.blue800;
      fontColor = colors.white;
      break;
    case 'gray':
      defaultBackground = colors.gray800;
      fontColor = colors.white;
      break;
    case 'green':
      defaultBackground = colors.green800;
      fontColor = colors.white;
      break;
    case 'lime':
      defaultBackground = colors.lime800;
      fontColor = colors.lime1100;
      break;
    case 'mint':
      defaultBackground = colors.mint800;
      fontColor = colors.mint1100;
      break;
    case 'orange':
      defaultBackground = colors.orange800;
      fontColor = colors.white;
      break;
    case 'pink':
      defaultBackground = colors.pink800;
      fontColor = colors.white;
      break;
    case 'purple':
      defaultBackground = colors.purple800;
      fontColor = colors.white;
      break;
    case 'red':
      defaultBackground = colors.red800;
      fontColor = colors.white;
      break;
    case 'sky':
      defaultBackground = colors.sky800;
      fontColor = colors.sky1100;
      break;
    case 'yellow':
      defaultBackground = colors.yellow800;
      fontColor = colors.yellow1100;
      break;
  }

  return css`
    border: none;
    background: ${defaultBackground};
    color: ${fontColor};
  `;
};
const getSurfaceBadgeStyle = (color: AccentColorType) => {
  let defaultBackground;
  let defaultBoxShadow;
  let fontColor;

  switch (color) {
    case 'blue':
      defaultBackground = colors.blue100;
      defaultBoxShadow = `inset 0 0 0 1px ${colors.blue600}`;
      fontColor = colors.blue1000;
      break;
    case 'gray':
      defaultBackground = colors.gray100;
      defaultBoxShadow = `inset 0 0 0 1px ${colors.gray600}`;
      fontColor = colors.gray1000;
      break;
    case 'green':
      defaultBackground = colors.green100;
      defaultBoxShadow = `inset 0 0 0 1px ${colors.green600}`;
      fontColor = colors.green1000;
      break;
    case 'lime':
      defaultBackground = colors.lime100;
      defaultBoxShadow = `inset 0 0 0 1px ${colors.lime600}`;
      fontColor = colors.lime1000;
      break;
    case 'mint':
      defaultBackground = colors.mint100;
      defaultBoxShadow = `inset 0 0 0 1px ${colors.mint600}`;
      fontColor = colors.mint1000;
      break;
    case 'orange':
      defaultBackground = colors.orange100;
      defaultBoxShadow = `inset 0 0 0 1px ${colors.orange600}`;
      fontColor = colors.orange1000;
      break;
    case 'pink':
      defaultBackground = colors.pink100;
      defaultBoxShadow = `inset 0 0 0 1px ${colors.pink600}`;
      fontColor = colors.pink1000;
      break;
    case 'purple':
      defaultBackground = colors.purple100;
      defaultBoxShadow = `inset 0 0 0 1px ${colors.purple600}`;
      fontColor = colors.purple1000;
      break;
    case 'red':
      defaultBackground = colors.red100;
      defaultBoxShadow = `inset 0 0 0 1px ${colors.red600}`;
      fontColor = colors.red1000;
      break;
    case 'sky':
      defaultBackground = colors.sky100;
      defaultBoxShadow = `inset 0 0 0 1px ${colors.sky600}`;
      fontColor = colors.sky1000;
      break;
    case 'yellow':
      defaultBackground = colors.yellow100;
      defaultBoxShadow = `inset 0 0 0 1px ${colors.yellow600}`;
      fontColor = colors.yellow1000;
      break;
  }

  return css`
    border: none;
    background: ${defaultBackground};
    color: ${fontColor};
    box-shadow: ${defaultBoxShadow};
  `;
};

export const getBadgeVariant = (variant: BadgeVariantType, color: AccentColorType) => {
  switch (variant) {
    case 'soft':
      return getSoftBadgeStyle(color);
    case 'outline':
      return getOutlineBadgeStyle(color);
    case 'solid':
      return getSolidBadgeStyle(color);
    case 'surface':
      return getSurfaceBadgeStyle(color);
  }
};

// getBadgeSize
export const getBadgeSize = (size: Exclude<BadgeSizeType, 'large'>) => {
  let paddingSize;
  let typo;

  switch (size) {
    case 'small':
      paddingSize = '2px 8px';
      typo = typography.b6;
      break;

    case 'medium':
      paddingSize = '6px 16px';
      typo = typography.b4;
      break;
  }

  return css`
    padding: ${paddingSize};
    ${typo}
  `;
};
