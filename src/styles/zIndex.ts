export const zIndex = {
  dialogOverlay: 900,
  dialogContent: 1000,
  alertDialogOverlay: 1100,
  alertDialogContent: 1200,
  toast: 9999,
};

export type ZIndexType = keyof typeof zIndex;
