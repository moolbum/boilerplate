import React, { HTMLAttributes, PropsWithChildren, ReactNode, createContext, useContext, useEffect } from 'react';
import Typo from '../Typo';
import { createPortal } from 'react-dom';
import { styled } from 'styled-components';
import { colors } from '@/styles/color';
import { borderRadius } from '@/styles/radius';
import { zIndex } from '@/styles/zIndex';

interface DialogContextProps {
  open?: boolean;
  onClose: () => void;
}

/** Dialog Root 최상단 컴포넌트*/
interface DialogMainProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
}
const DialogContext = createContext<DialogContextProps | undefined>(undefined);
function DialogRoot({ children, open = false, onClose }: PropsWithChildren<DialogMainProps>) {
  return <DialogContext.Provider value={{ open, onClose }}>{children}</DialogContext.Provider>;
}

/** Dialog Close */
function DialogCloseButton({ children }: PropsWithChildren) {
  const { onClose } = useContext(DialogContext as React.Context<DialogContextProps>);

  return <button onClick={() => onClose()}>{children}</button>;
}

/** Dialog Portal */
function DialogPortal({ children }: PropsWithChildren) {
  const { open } = useContext(DialogContext as React.Context<DialogContextProps>);

  return open ? createPortal(<>{children}</>, document.body) : null;
}

/** Dialog Overlay */
function DialogOverlay(props: HTMLAttributes<HTMLDivElement>) {
  const { onClose } = useContext(DialogContext as React.Context<DialogContextProps>);

  return (
    <div
      {...props}
      onClick={() => {
        onClose();
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
  CloseButton: DialogCloseButton,
});

// Dialog
interface DialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  isCloseButton?: boolean;
  rightAccessary?: ReactNode;
  footer?: ReactNode;
}
function Dialog({
  open = false,
  onClose,
  title,
  rightAccessary,
  children,
  footer,
  isCloseButton = true,
}: PropsWithChildren<DialogProps>) {
  // OverLay scroll lock, current dialogStack
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = 'auto';
      };
    }
  }, [open, onClose]);

  // KeyDown Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    if (open) {
      document.body.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [onClose, open]);

  return (
    <QDialog open={open} onClose={onClose} role="dialog">
      <QDialog.Portal>
        <StyledOverlay />

        {/* Dialog Contents */}
        <DialogContainer>
          <StyledHeader>
            <Typo>{title}</Typo>
            {rightAccessary}
            {isCloseButton && <QDialog.CloseButton>X</QDialog.CloseButton>}
          </StyledHeader>

          <StyledContent>{children}</StyledContent>
          {footer}
        </DialogContainer>
      </QDialog.Portal>
    </QDialog>
  );
}

export default Dialog;

const DialogContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: calc(100vh - 200px);
  background: ${colors.white};
  border-radius: ${borderRadius.medium};
  z-index: ${zIndex.dialogContent};
`;

const StyledOverlay = styled(QDialog.Overlay)`
  position: fixed;
  inset: 0;
  background: ${colors.greyOpacity600};
  width: 100%;
  height: 100%;
  z-index: ${zIndex.dialogContent};
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledContent = styled(QDialog.Content)`
  overflow: auto;
`;
