export const borderRadius = {
  none: 0,
  /**
   * @description small 4px
   */
  small: '4px',
  /**
   * @description medium 8px
   */
  medium: '8px',
  /**
   * @description large 16px
   */
  large: '16px',
  /**
   * @description full 100%
   */
  full: '100%',
};

export type RadiusType = keyof typeof borderRadius;
