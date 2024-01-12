import { CommonSizeType } from '@/styles/common';
import { css } from 'styled-components';

export const getCardSize = (size?: CommonSizeType) => {
  switch (size) {
    case 'small':
      return css`
        padding: 12px;
      `;
    case 'medium':
      return css`
        padding: 16px;
      `;
    case 'large':
      return css`
        padding: 24px;
      `;

    default:
      return css`
        padding: 16px;
      `;
  }
};