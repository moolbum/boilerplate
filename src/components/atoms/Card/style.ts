import { css } from 'styled-components';
import { BadgeSizeType } from '@src/types/size';

export const getCardSize = (size?: BadgeSizeType) => {
  let paddingSize;

  switch (size) {
    case 'small':
      paddingSize = 12;
      break;

    case 'medium':
      paddingSize = 16;
      break;

    case 'large':
      paddingSize = 24;
      break;

    default:
      paddingSize = 16;
      break;
  }

  return css`
    padding: ${paddingSize}px;
  `;
};
