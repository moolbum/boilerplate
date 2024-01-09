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

  // Body medium
  b1m: css`
    font-size: 26px;
    line-height: 1.346;
  `,
  b2m: css`
    font-size: 24px;
    line-height: 1.375;
  `,
  b3m: css`
    font-size: 22px;
    line-height: 1.409;
  `,
  b4m: css`
    font-size: 20px;
    line-height: 1.45;
  `,
  b5m: css`
    font-size: 19px;
    line-height: 1.474;
  `,
  b6m: css`
    font-size: 17px;
    line-height: 1.5;
  `,
  b7m: css`
    font-size: 16px;
    line-height: 1.5;
  `,
  b8m: css`
    font-size: 15px;
    line-height: 1.5;
  `,
  b9m: css`
    font-size: 14px;
    line-height: 1.5;
  `,
  b10m: css`
    font-size: 13px;
    line-height: 1.5;
  `,
  b11m: css`
    font-size: 11px;
    line-height: 1.5;
  `,

  // Body regular
  b1r: css`
    font-size: 26px;
    line-height: 1.346;
  `,
  b2r: css`
    font-size: 24px;
    line-height: 1.375;
  `,
  b3r: css`
    font-size: 22px;
    line-height: 1.409;
  `,
  b4r: css`
    font-size: 20px;
    line-height: 1.45;
  `,
  b5r: css`
    font-size: 19px;
    line-height: 1.474;
  `,
  b6r: css`
    font-size: 17px;
    line-height: 1.5;
  `,
  b7r: css`
    font-size: 16px;
    line-height: 1.5;
  `,
  b8r: css`
    font-size: 15px;
    line-height: 1.5;
  `,
  b9r: css`
    font-size: 14px;
    line-height: 1.5;
  `,
  b10r: css`
    font-size: 13px;
    line-height: 1.5;
  `,
  b11r: css`
    font-size: 11px;
    line-height: 1.5;
  `,

  // Button_semibold
  btn1sb: css`
    font-size: 20px;
    line-height: 1.45;
  `,
  btn2sb: css`
    font-size: 17px;
    line-height: 1.5;
  `,
  btn3sb: css`
    font-size: 15px;
    line-height: 1.5;
  `,
  btn4sb: css`
    font-size: 13px;
    line-height: 1.5;
  `,
  btn5sb: css`
    font-size: 11px;
    line-height: 1.5;
  `,

  // Button_medium
  btn1m: css`
    font-size: 20px;
    line-height: 1.45;
  `,
  btn2m: css`
    font-size: 17px;
    line-height: 1.5;
  `,
  btn3m: css`
    font-size: 15px;
    line-height: 1.5;
  `,
  btn4m: css`
    font-size: 13px;
    line-height: 1.5;
  `,
  btn5m: css`
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
