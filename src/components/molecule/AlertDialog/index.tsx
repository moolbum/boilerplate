import { colors } from '@/styles/color';
import { borderRadius } from '@/styles/radius';
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
import { createPortal } from 'react-dom';
import { styled } from 'styled-components';
import Typo from '../../atom/Typo';
import Button from '../../atom/Button';
import Flex from '@/components/molecule/Flex';
import { zIndex } from '@/styles/zIndex';

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

/** AlertDialog Close */
function AlertDialogCloseButton({ children }: PropsWithChildren) {
  const { onClose } = useContext(AlertDialogContext as React.Context<AlertDialogContextProps>);

  return <button onClick={() => onClose()}>{children}</button>;
}

/** AlertDialog Portal */
function AlertDialogPortal({ children }: PropsWithChildren) {
  const { open } = useContext(AlertDialogContext as React.Context<AlertDialogContextProps>);

  return open ? createPortal(<>{children}</>, document.body) : null;
}

/** AlertDialog Overlay */
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

/** AlertDialog Content */
function AlertDialogContent(props: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <div {...props} />;
}

const QAlertDialog = Object.assign(AlertDialogRoot, {
  Content: AlertDialogContent,
  Portal: AlertDialogPortal,
  Overlay: AlertDialogOverlay,
  CloseButton: AlertDialogCloseButton,
});

/** AlertDialog  */
let alertDialogStack: Array<() => void> = [];
interface AlertDialogProps {
  open: boolean;
  onClose: () => void;
  onOk?: () => void;
  onOpen?: () => void;
  title?: string;
  isCloseButton?: boolean;
  rightAccessary?: ReactNode;
}
function AlertDialog({
  open = false,
  onOpen,
  onOk,
  onClose,
  title,
  rightAccessary,
  children,
  isCloseButton = true,
}: PropsWithChildren<AlertDialogProps>) {
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
      alertDialogStack = [];
      document.body.style.overflow = 'auto';
    };
  }, []);

  // OverLay scroll lock, current dialogStack
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      alertDialogStack.push(onClose);
    } else {
      alertDialogStack.pop();
    }
  }, [open, onClose]);

  // KeyDown Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        const topDialogClose = alertDialogStack[alertDialogStack.length - 1];
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
    <QAlertDialog open={open} onClose={onClose}>
      <QAlertDialog.Portal>
        <StyledOverlay />

        {/* Alert Dialog Contents */}
        <AlertDialogContainer>
          <StyledHeader>
            <Typo>{title}</Typo>
            {rightAccessary}
            {isCloseButton && <QAlertDialog.CloseButton>X</QAlertDialog.CloseButton>}
          </StyledHeader>

          <QAlertDialog.Content>{children}</QAlertDialog.Content>

          <Flex direction="row" gap={8}>
            {onOk && <Button>✅</Button>}
            <Button onClick={onClose}>❌</Button>
          </Flex>
        </AlertDialogContainer>
      </QAlertDialog.Portal>
    </QAlertDialog>
  );
}

export default AlertDialog;

const AlertDialogContainer = styled.section`
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
  z-index: ${zIndex.alertDialogOverlay};
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
