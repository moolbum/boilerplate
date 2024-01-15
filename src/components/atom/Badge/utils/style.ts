import { AccentColorType, colors } from '@/styles/color';
import { BadgeSizeType } from '@/styles/size';
import { typography } from '@/styles/typography';
import { BadgeVariantType } from '@/styles/variant';
import { css } from 'styled-components';

// getBadgeVariant;
const getSoftBadgeStyle = (color: AccentColorType) => {
  let softBadgeStyle;

  switch (color) {
    case 'blue':
      softBadgeStyle = css`
        background: ${colors.blue200};
        color: ${colors.blue1000};
      `;
      break;
    case 'gray':
      softBadgeStyle = css`
        background: ${colors.gray200};
        color: ${colors.gray1000};
      `;
      break;
    case 'green':
      softBadgeStyle = css`
        background: ${colors.green200};
        color: ${colors.green1000};
      `;
      break;
    case 'lime':
      softBadgeStyle = css`
        background: ${colors.lime200};
        color: ${colors.lime1000};
      `;
      break;
    case 'mint':
      softBadgeStyle = css`
        background: ${colors.mint200};
        color: ${colors.mint1000};
      `;
      break;
    case 'orange':
      softBadgeStyle = css`
        background: ${colors.orange200};
        color: ${colors.orange1000};
      `;
      break;
    case 'pink':
      softBadgeStyle = css`
        background: ${colors.pink200};
        color: ${colors.pink1000};
      `;
      break;
    case 'purple':
      softBadgeStyle = css`
        background: ${colors.purple200};
        color: ${colors.purple1000};
      `;
      break;
    case 'red':
      softBadgeStyle = css`
        background: ${colors.red200};
        color: ${colors.red1000};
      `;
      break;
    case 'sky':
      softBadgeStyle = css`
        background: ${colors.sky200};
        color: ${colors.sky1000};
      `;
      break;
    case 'yellow':
      softBadgeStyle = css`
        background: ${colors.yellow200};
        color: ${colors.yellow1000};
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
const getSolidBadgeStyle = (color: AccentColorType) => {
  let solidBadgeStyle;

  switch (color) {
    case 'blue':
      solidBadgeStyle = css`
        background: ${colors.blue800};
        color: ${colors.white};
      `;
      break;
    case 'gray':
      solidBadgeStyle = css`
        background: ${colors.gray800};
        color: ${colors.white};
      `;
      break;
    case 'green':
      solidBadgeStyle = css`
        background: ${colors.green800};
        color: ${colors.white};
      `;
      break;
    case 'lime':
      solidBadgeStyle = css`
        background: ${colors.lime800};
        color: ${colors.lime1100};
      `;
      break;
    case 'mint':
      solidBadgeStyle = css`
        background: ${colors.mint800};
        color: ${colors.mint1100};
      `;
      break;
    case 'orange':
      solidBadgeStyle = css`
        background: ${colors.orange800};
        color: ${colors.white};
      `;
      break;
    case 'pink':
      solidBadgeStyle = css`
        background: ${colors.pink800};
        color: ${colors.white};
      `;
      break;
    case 'purple':
      solidBadgeStyle = css`
        background: ${colors.purple800};
        color: ${colors.white};
      `;
      break;
    case 'red':
      solidBadgeStyle = css`
        background: ${colors.red800};
        color: ${colors.white};
      `;
      break;
    case 'sky':
      solidBadgeStyle = css`
        background: ${colors.sky800};
        color: ${colors.sky1100};
      `;
      break;
    case 'yellow':
      solidBadgeStyle = css`
        background: ${colors.yellow800};
        color: ${colors.yellow1100};
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
