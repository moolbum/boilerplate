import { AccentColorType, colors } from '@/styles/color';
import { BadgeSizeType } from '@/styles/size';
import { typography } from '@/styles/typography';
import { CommonVariantType } from '@/styles/variant';
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
const getSolidBadgeStyle = (color: AccentColorType) => {
  let solidBadgeStyle;

  switch (color) {
    case 'blue':
      solidBadgeStyle = css`
        background: ${colors.blue900};
        color: ${colors.white};
      `;
      break;
    case 'gray':
      solidBadgeStyle = css`
        background: ${colors.gray900};
        color: ${colors.white};
      `;
      break;
    case 'green':
      solidBadgeStyle = css`
        background: ${colors.green900};
        color: ${colors.white};
      `;
      break;
    case 'lime':
      solidBadgeStyle = css`
        background: ${colors.lime900};
        color: ${colors.lime1200};
      `;
      break;
    case 'mint':
      solidBadgeStyle = css`
        background: ${colors.mint900};
        color: ${colors.mint1200};
      `;
      break;
    case 'orange':
      solidBadgeStyle = css`
        background: ${colors.orange900};
        color: ${colors.white};
      `;
      break;
    case 'pink':
      solidBadgeStyle = css`
        background: ${colors.pink900};
        color: ${colors.white};
      `;
      break;
    case 'purple':
      solidBadgeStyle = css`
        background: ${colors.purple900};
        color: ${colors.white};
      `;
      break;
    case 'red':
      solidBadgeStyle = css`
        background: ${colors.red900};
        color: ${colors.white};
      `;
      break;
    case 'sky':
      solidBadgeStyle = css`
        background: ${colors.sky900};
        color: ${colors.sky1200};
      `;
      break;
    case 'yellow':
      solidBadgeStyle = css`
        background: ${colors.yellow900};
        color: ${colors.yellow1200};
      `;
      break;
  }

  return solidBadgeStyle;
};
const getSurfaceBadgeStyle = (color: AccentColorType) => {
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
export const getBadgeSize = (size: Exclude<BadgeSizeType, 'large'>) => {
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
