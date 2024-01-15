import { css } from 'styled-components';

export const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export const getFontFamily = (fontWeight?: keyof typeof fontWeights) => {
  switch (fontWeight) {
    case 'bold':
      return css`
        font-family: 'Pretendard Bold';
      `;
    case 'semibold':
      return css`
        font-family: 'Pretendard SemiBold';
      `;
    case 'medium':
      return css`
        font-family: 'Pretendard Medium';
      `;
    case 'regular':
      return css`
        font-family: 'Pretendard Regular';
      `;
    default:
      return css`
        font-family: 'Pretendard Regular';
      `;
  }
};

// lineheight = fontSize(px) * line height
export const typography = {
  // Header
  h1: css`
    font-size: 48px;
    line-height: 1.208;
  `,
  h2: css`
    font-size: 40px;
    line-height: 1.25;
  `,
  h3: css`
    font-size: 36px;
    line-height: 1.278;
  `,
  h4: css`
    font-size: 32px;
    line-height: 1.312;
  `,
  h5: css`
    font-size: 28px;
    line-height: 1.321;
  `,
  h6: css`
    font-size: 26px;
    line-height: 1.346;
  `,
  h7: css`
    font-size: 24px;
    line-height: 1.375;
  `,
  h8: css`
    font-size: 22px;
    line-height: 1.409;
  `,
  h9: css`
    font-size: 20px;
    line-height: 1.45;
  `,

  // Body
  b1: css`
    font-size: 18px;
    line-height: 1.474;
  `,
  b2: css`
    font-size: 17px;
    line-height: 1.5;
  `,
  b3: css`
    font-size: 16px;
    line-height: 1.5;
  `,
  b4: css`
    font-size: 15px;
    line-height: 1.5;
  `,
  b5: css`
    font-size: 14px;
    line-height: 1.5;
  `,
  b6: css`
    font-size: 12px;
    line-height: 1.5;
  `,
  b7: css`
    font-size: 11px;
    line-height: 1.5;
  `,
};

export type TypographyType = keyof typeof typography;
