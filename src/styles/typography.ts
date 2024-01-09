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
  // Display
  d1: css`
    font-size: 48px;
    line-height: 1.208;
  `,
  d2: css`
    font-size: 40px;
    line-height: 1.25;
  `,
  d3: css`
    font-size: 36px;
    line-height: 1.278;
  `,
  d4: css`
    font-size: 32px;
    line-height: 1.312;
  `,
  d5: css`
    font-size: 28px;
    line-height: 1.321;
  `,
  d6: css`
    font-size: 24px;
    line-height: 1.375;
  `,

  // Header
  h1: css`
    font-size: 26px;
    line-height: 1.346;
  `,
  h2: css`
    font-size: 24px;
    line-height: 1.375;
  `,
  h3: css`
    font-size: 22px;
    line-height: 1.409;
  `,
  h4: css`
    font-size: 20px;
    line-height: 1.45;
  `,
  h5: css`
    font-size: 19px;
    line-height: 1.474;
  `,
  h6: css`
    font-size: 17px;
    line-height: 1.5;
  `,
  h7: css`
    font-size: 16px;
    line-height: 1.5;
  `,
  h8: css`
    font-size: 15px;
    line-height: 1.5;
  `,
  h9: css`
    font-size: 14px;
    line-height: 1.5;
  `,
  h10: css`
    font-size: 13px;
    line-height: 1.5;
  `,
  h11: css`
    font-size: 11px;
    line-height: 1.5;
  `,

  // Body
  b1: css`
    font-size: 26px;
    line-height: 1.346;
  `,
  b2: css`
    font-size: 24px;
    line-height: 1.375;
  `,
  b3: css`
    font-size: 22px;
    line-height: 1.409;
  `,
  b4: css`
    font-size: 20px;
    line-height: 1.45;
  `,
  b5: css`
    font-size: 19px;
    line-height: 1.474;
  `,
  b6: css`
    font-size: 17px;
    line-height: 1.5;
  `,
  b7: css`
    font-size: 16px;
    line-height: 1.5;
  `,
  b8: css`
    font-size: 15px;
    line-height: 1.5;
  `,
  b9: css`
    font-size: 14px;
    line-height: 1.5;
  `,
  b10: css`
    font-size: 13px;
    line-height: 1.5;
  `,
  b11: css`
    font-size: 11px;
    line-height: 1.5;
  `,

  // Button
  btn1: css`
    font-size: 20px;
    line-height: 1.45;
  `,
  btn2: css`
    font-size: 17px;
    line-height: 1.5;
  `,
  btn3: css`
    font-size: 15px;
    line-height: 1.5;
  `,
  btn4: css`
    font-size: 13px;
    line-height: 1.5;
  `,
  btn5: css`
    font-size: 11px;
    line-height: 1.5;
  `,

  // Label
  label1: css`
    font-size: 15px;
    line-height: 1.5;
  `,
  label2: css`
    font-size: 13px;
    line-height: 1.5;
  `,
  label3: css`
    font-size: 11px;
    line-height: 1.5;
  `,
};

export type TypographyType = keyof typeof typography;
