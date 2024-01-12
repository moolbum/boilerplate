import { AccentColorType, colors } from '@/styles/color';
import { CommonSizeType, CommonVariantType } from '@/styles/common';
import { typography } from '@/styles/typography';
import { css } from 'styled-components';

// getBadgeVariant;
const getSoftBadgeStyle = (color: AccentColorType) => {
  let softBadgeStyle;

  switch (color) {
    case 'blue':
      softBadgeStyle = css`
        background: ${colors.blue300};
        color: ${colors.blue1100};
      `;
      break;
    case 'gray':
      softBadgeStyle = css`
        background: ${colors.gray300};
        color: ${colors.gray1100};
      `;
      break;
    case 'green':
      softBadgeStyle = css`
        background: ${colors.green300};
        color: ${colors.green1100};
      `;
      break;
    case 'lime':
      softBadgeStyle = css`
        background: ${colors.lime300};
        color: ${colors.lime1100};
      `;
      break;
    case 'mint':
      softBadgeStyle = css`
        background: ${colors.mint300};
        color: ${colors.mint1100};
      `;
      break;
    case 'orange':
      softBadgeStyle = css`
        background: ${colors.orange300};
        color: ${colors.orange1100};
      `;
      break;
    case 'pink':
      softBadgeStyle = css`
        background: ${colors.pink300};
        color: ${colors.pink1100};
      `;
      break;
    case 'purple':
      softBadgeStyle = css`
        background: ${colors.purple300};
        color: ${colors.purple1100};
      `;
      break;
    case 'red':
      softBadgeStyle = css`
        background: ${colors.red300};
        color: ${colors.red1100};
      `;
      break;
    case 'sky':
      softBadgeStyle = css`
        background: ${colors.sky300};
        color: ${colors.sky1100};
      `;
      break;
    case 'yellow':
      softBadgeStyle = css`
        background: ${colors.yellow300};
        color: ${colors.yellow1100};
      `;
      break;
  }

  return softBadgeStyle;
};
const getOutlineBadgeStyle = (color: AccentColorType) => {
  let outlineBadgeStyle;

  switch (color) {
    case 'blue':
      outlineBadgeStyle = css`
        background: ${colors.blue300};
        color: ${colors.blue1100};
      `;
      break;
    case 'gray':
      outlineBadgeStyle = css`
        background: ${colors.gray300};
        color: ${colors.gray1100};
      `;
      break;
    case 'green':
      outlineBadgeStyle = css`
        background: ${colors.green300};
        color: ${colors.green1100};
      `;
      break;
    case 'lime':
      outlineBadgeStyle = css`
        background: ${colors.lime300};
        color: ${colors.lime1100};
      `;
      break;
    case 'mint':
      outlineBadgeStyle = css`
        background: ${colors.mint300};
        color: ${colors.mint1100};
      `;
      break;
    case 'orange':
      outlineBadgeStyle = css`
        background: ${colors.orange300};
        color: ${colors.orange1100};
      `;
      break;
    case 'pink':
      outlineBadgeStyle = css`
        background: ${colors.pink300};
        color: ${colors.pink1100};
      `;
      break;
    case 'purple':
      outlineBadgeStyle = css`
        background: ${colors.purple300};
        color: ${colors.purple1100};
      `;
      break;
    case 'red':
      outlineBadgeStyle = css`
        background: ${colors.red300};
        color: ${colors.red1100};
      `;
      break;
    case 'sky':
      outlineBadgeStyle = css`
        background: ${colors.sky300};
        color: ${colors.sky1100};
      `;
      break;
    case 'yellow':
      outlineBadgeStyle = css`
        background: ${colors.yellow300};
        color: ${colors.yellow1100};
      `;
      break;
  }

  return outlineBadgeStyle;
};
const getSolidBadgeStyle = (color: AccentColorType) => {
  return css``;
};
const getSurfaceBadgeStyle = (color: AccentColorType) => {
  return css``;
};

export const getBadgeVariant = (variant: CommonVariantType, color: AccentColorType) => {
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
export const getBadgeSize = (size: Exclude<CommonSizeType, 'large'>) => {
  switch (size) {
    case 'small':
      return css`
        padding: 2px 8px;
        ${typography.b6};
      `;
    case 'medium':
      return css`
        padding: 6px 16px;
        ${typography.b4};
      `;
  }
};
