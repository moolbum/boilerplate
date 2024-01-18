import React, {
  ButtonHTMLAttributes,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  createContext,
  useContext,
} from 'react';
import Typo from '../Typo';
import { createPortal } from 'react-dom';
import { styled } from 'styled-components';

interface DialogContextProps {
  isOpen: boolean;
  onOpenChange?: () => void;
}
export const DialogContext = createContext<DialogContextProps | undefined>(undefined);

// Dialog Main 최상단 컴포넌트
interface DialogMainProps {
  open: boolean;
  onOpenChange?: () => void;
}
function DialogMain({ children, open, onOpenChange = undefined }: PropsWithChildren<DialogMainProps>) {
  const values = {
    isOpen: open,
    onOpenChange,
  };

  return <DialogContext.Provider value={values}>{children}</DialogContext.Provider>;
}

// Dialog Header
function DialogHeader({ children }: PropsWithChildren) {
  return <>{children}</>;
}

// Dialog Content
function DialogContent({ children }: PropsWithChildren) {
  return <>{children}</>;
}

// Dialog Footer
function DialogFooter({ children }: PropsWithChildren) {
  return <>{children}</>;
}

// Dialog Overlay
function DialogOverlay(props: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} />;
}

// Dialog Portal
export function DialogPortal({ children }: PropsWithChildren) {
  const { isOpen } = useContext(DialogContext as React.Context<DialogContextProps>);

  return isOpen ? createPortal(<>{children}</>, document.body) : null;
}

// Dialog ConfirmButton
interface DialogConfirmButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
function DialogConfirmButton(props: DialogConfirmButtonProps) {
  return <button {...props} />;
}

// Dialog CloseButton
interface DialogCloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
function DialogCloseButton(props: DialogCloseButtonProps) {
  return <button {...props} />;
}

// Dialog Quantums
const QDialog = Object.assign(DialogMain, {
  Header: DialogHeader,
  Content: DialogContent,
  Footer: DialogFooter,
  Portal: DialogPortal,
  Overlay: DialogOverlay,
  OkButton: DialogConfirmButton,
  CloseButton: DialogCloseButton,
});

// Dialog
interface DialogProps {
  open?: boolean;
  onOpenChange?: () => void;
  title?: string;
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
}: PropsWithChildren<DialogProps>) {
  return (
    <QDialog open={open} onOpenChange={onOpenChange}>
      <QDialog.Portal />
      <StyledOverlay />

      <StyledHeader>
        <Typo>{title}</Typo>
        {rightAccessary}
      </StyledHeader>

      <QDialog.Content>{children}</QDialog.Content>
      <QDialog.Footer>{footer}</QDialog.Footer>
    </QDialog>
  );
}

export default Dialog;

const StyledOverlay = styled(QDialog.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
`;

const StyledHeader = styled(QDialog.Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
