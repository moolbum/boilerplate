import React, { HTMLAttributes, PropsWithChildren, createContext, useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { styled } from 'styled-components';
import { colors } from '@/styles/color';
import { borderRadius } from '@/styles/radius';
import { zIndex } from '@/styles/zIndex';
import { Typo } from '@/components/atoms';

interface AlertDialogContextProps {
  open?: boolean;
  onClose: () => void;
}

/** AlertDialog Root 최상단 컴포넌트*/
interface AlertDialogMainProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
}
const AlertDialogContext = createContext<AlertDialogContextProps | undefined>(undefined);
function AlertDialogRoot({ children, open = false, onClose }: PropsWithChildren<AlertDialogMainProps>) {
  return <AlertDialogContext.Provider value={{ open, onClose }}>{children}</AlertDialogContext.Provider>;
}

/** Dialog Close */
function AlertDialogCloseButton({ children }: PropsWithChildren) {
  const { onClose } = useContext(AlertDialogContext as React.Context<AlertDialogContextProps>);

  return <button onClick={() => onClose()}>{children}</button>;
}

/** Dialog Portal */
function AlertDialogPortal({ children }: PropsWithChildren) {
  const { open } = useContext(AlertDialogContext as React.Context<AlertDialogContextProps>);

  return open ? createPortal(<>{children}</>, document.body) : null;
}

/** Dialog Overlay */
function AlertDialogOverlay(props: HTMLAttributes<HTMLDivElement>) {
  const { onClose } = useContext(AlertDialogContext as React.Context<AlertDialogContextProps>);

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
function AlertDialogContent(props: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <div {...props} />;
}

const QAlertDialog = Object.assign(AlertDialogRoot, {
  Content: AlertDialogContent,
  Portal: AlertDialogPortal,
  Overlay: AlertDialogOverlay,
  CloseButton: AlertDialogCloseButton,
});

// Dialog
interface AlertDialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  isCloseButton?: boolean;
}
function AlertDialog({
  open = false,
  onClose,
  title,
  children,
  isCloseButton = true,
}: PropsWithChildren<AlertDialogProps>) {
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
    <QAlertDialog open={open} onClose={onClose} role="alertdialog">
      <QAlertDialog.Portal>
        <StyledOverlay />

        {/* AlertDialog Contents */}
        <DialogContainer>
          <StyledHeader>
            <Typo>{title}</Typo>
            {isCloseButton && <QAlertDialog.CloseButton>X</QAlertDialog.CloseButton>}
          </StyledHeader>

          <QAlertDialog.Content>{children}</QAlertDialog.Content>
        </DialogContainer>
      </QAlertDialog.Portal>
    </QAlertDialog>
  );
}

export default AlertDialog;

const DialogContainer = styled.section`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: ${colors.white};
  border-radius: ${borderRadius.medium};
  z-index: ${zIndex.alertDialogContent};
`;

const StyledOverlay = styled(QAlertDialog.Overlay)`
  position: fixed;
  inset: 0;
  background: ${colors.greyOpacity600};
  width: 100%;
  height: 100%;
  z-index: ${zIndex.alertDialogContent};
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
