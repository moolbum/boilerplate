import { css } from 'styled-components';
import { CalloutSizeType } from '@src/types/size';

// getCalloutSize
export const getCalloutSize = (size: CalloutSizeType) => {
  let paddingSize;

  switch (size) {
    case 'small':
      paddingSize = '12px';
      break;

    case 'medium':
      paddingSize = '16px';
      break;

    case 'large':
      paddingSize = '24px';
      break;
  }

  return css`
    padding: ${paddingSize};
  `;
};
