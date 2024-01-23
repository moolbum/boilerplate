import React, {
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react';
import Typo from '../Typo';
import { createPortal } from 'react-dom';
import { styled } from 'styled-components';
import { colors } from '@/styles/color';
import { borderRadius } from '@/styles/radius';

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

let dialogStack: Array<() => void> = [];
// Dialog
interface DialogProps {
  open: boolean;
  onClose: () => void;
  onOpen?: () => void;
  title?: string;
  isCloseButton?: boolean;
  rightAccessary?: ReactNode;
  footer?: ReactNode;
}
function Dialog({
  open = false,
  onOpen,
  onClose,
  title,
  rightAccessary,
  children,
  footer,
  isCloseButton = true,
}: PropsWithChildren<DialogProps>) {
  const isReady = useRef(false);

  // OnOpen;
  useLayoutEffect(() => {
    if (!isReady.current) {
      onOpen?.();
      isReady.current = true;
    }
  }, [onOpen]);

  // Cleanup unmounts
  useEffect(() => {
    return () => {
      dialogStack = [];
      document.body.style.overflow = 'auto';
    };
  }, []);

  // OverLay scroll lock, current dialogStack
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      dialogStack.push(onClose);
    } else {
      dialogStack.pop();
    }
  }, [open, onClose]);

  // KeyDown Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        const topDialogClose = dialogStack[dialogStack.length - 1];
        topDialogClose && topDialogClose();
      }
    };

    if (open) {
      document.body.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (open) {
        document.body.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [open]);

  return (
    <QDialog open={open} onClose={onClose}>
      <QDialog.Portal>
        <StyledOverlay />

        {/* Dialog Contents */}
        <DialogContainer>
          <StyledHeader>
            <Typo>{title}</Typo>
            {rightAccessary}
            {isCloseButton && <QDialog.CloseButton>X</QDialog.CloseButton>}
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
  height: 100%;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledFooter = styled.div``;
