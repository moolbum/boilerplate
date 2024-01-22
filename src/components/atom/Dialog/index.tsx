import React, { HTMLAttributes, PropsWithChildren, ReactNode, createContext, useContext, useLayoutEffect } from 'react';
import Typo from '../Typo';
import { createPortal } from 'react-dom';
import { styled } from 'styled-components';
import { colors } from '@/styles/color';
import { borderRadius } from '@/styles/radius';

interface DialogContextProps {
  open?: boolean;
  onOpenChange: () => void;
}

/** Dialog Root 최상단 컴포넌트*/
interface DialogMainProps {
  open: boolean;
  onOpenChange: () => void;
}
const DialogContext = createContext<DialogContextProps | undefined>(undefined);
function DialogRoot({ children, open = false, onOpenChange }: PropsWithChildren<DialogMainProps>) {
  return <DialogContext.Provider value={{ open, onOpenChange }}>{children}</DialogContext.Provider>;
}

/** Dialog Toggle */
function DialogCloseToggle({ children }: PropsWithChildren) {
  const { onOpenChange } = useContext(DialogContext as React.Context<DialogContextProps>);

  return <button onClick={() => onOpenChange()}>{children}</button>;
}

/** Dialog Portal */
function DialogPortal({ children }: PropsWithChildren) {
  const { open } = useContext(DialogContext as React.Context<DialogContextProps>);

  return open ? createPortal(<>{children}</>, document.body) : null;
}

/** Dialog Overlay */
function DialogOverlay(props: HTMLAttributes<HTMLDivElement>) {
  const { onOpenChange } = useContext(DialogContext as React.Context<DialogContextProps>);

  return (
    <div
      {...props}
      onClick={() => {
        onOpenChange();
      }}
    />
  );
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
  open: boolean;
  onOpenChange: () => void;
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
  useLayoutEffect(() => {
    if (open) {
      document.body.setAttribute('style', 'overflow: hidden');
    } else {
      document.body.setAttribute('style', 'overflow: auto');
    }

    return () => {
      document.body.setAttribute('style', 'overflow: auto');
    };
  }, [open]);

  return (
    <QDialog open={open} onOpenChange={onOpenChange}>
      <QDialog.Portal>
        <StyledOverlay />

        {/* Dialog Contents */}
        <DialogContainer>
          <StyledHeader>
            <Typo>{title}</Typo>
            {rightAccessary}
            {isCloseButton && <QDialog.CloseButton />}
          </StyledHeader>

          <QDialog.Content>{children}</QDialog.Content>
          <StyledFooter>{footer}</StyledFooter>
        </DialogContainer>
      </QDialog.Portal>
    </QDialog>
  );
}

export default Dialog;

const DialogContainer = styled.section`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: ${colors.white};
  border-radius: ${borderRadius.medium};
`;

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

const StyledFooter = styled.div``;
