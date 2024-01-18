import React, { HTMLAttributes, PropsWithChildren, ReactNode, createContext, useContext } from 'react';
import Typo from '../Typo';
import { createPortal } from 'react-dom';
import { styled } from 'styled-components';
import { colors } from '@/styles/color';
import useToggleProvider from '@/hooks/useToggleProvider';

interface DialogContextProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

/** Dialog Root 최상단 컴포넌트*/
interface DialogMainProps {
  open?: boolean;
  onOpenChange?: React.Dispatch<React.SetStateAction<boolean>>;
}
const DialogContext = createContext<DialogContextProps | undefined>(undefined);
function DialogRoot({ children, open = undefined, onOpenChange = undefined }: PropsWithChildren<DialogMainProps>) {
  const { values } = useToggleProvider({
    open: open,
    onOpenChange,
  });

  return <DialogContext.Provider value={values}>{children}</DialogContext.Provider>;
}

/** Dialog Toggle */
function DialogCloseToggle({ children }: PropsWithChildren) {
  const { onOpenChange } = useContext(DialogContext as React.Context<DialogContextProps>);

  return <button onClick={() => onOpenChange(false)}>{children}</button>;
}

/** Dialog Portal */
function DialogPortal({ children }: PropsWithChildren) {
  const { isOpen } = useContext(DialogContext as React.Context<DialogContextProps>);

  return isOpen ? createPortal(<>{children}</>, document.body) : null;
}

/** Dialog Overlay */
function DialogOverlay(props: HTMLAttributes<HTMLDivElement>) {
  const { onOpenChange } = useContext(DialogContext as React.Context<DialogContextProps>);

  return <div {...props} onClick={() => onOpenChange(false)} />;
}

/** Dialog Content */
function DialogContent(props: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <div {...props} />;
}

const QDialog = Object.assign(DialogRoot, {
  Content: DialogContent,
  Portal: DialogPortal,
  Overlay: DialogOverlay,
  CloseButton: DialogCloseToggle,
});

// Dialog
interface DialogProps {
  open?: boolean;
  onOpenChange?: () => void;
  title?: string;
  isCloseButton?: boolean;
  rightAccessary?: ReactNode;
  footer?: ReactNode;
}
function Dialog({
  open = false,
  onOpenChange,
  title,
  rightAccessary,
  children,
  footer,
  isCloseButton,
}: PropsWithChildren<DialogProps>) {
  return (
    <QDialog open={open} onOpenChange={onOpenChange}>
      <QDialog.Portal>
        <StyledOverlay />

        <StyledHeader>
          <Typo>{title}</Typo>
          {rightAccessary}
          {isCloseButton && <QDialog.CloseButton />}
        </StyledHeader>

        <StyledContent>{children}</StyledContent>
        <StyledFooter>{footer}</StyledFooter>
      </QDialog.Portal>
    </QDialog>
  );
}

export default Dialog;

const StyledOverlay = styled(QDialog.Overlay)`
  position: fixed;
  inset: 0;
  background: ${colors.greyOpacity600};
  width: 100%;
  height: 100vh;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledContent = styled(QDialog.Content)`
  background: ${colors.white};
`;

const StyledFooter = styled.div``;
