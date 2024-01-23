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

/** Dialog Close */
function DialogCloseButton({ children }: PropsWithChildren) {
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
  CloseButton: DialogCloseButton,
});

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

  useLayoutEffect(() => {
    if (!isReady.current) {
      onOpen?.();
      isReady.current = true;
    }
  }, [onOpen]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  return (
    <QDialog open={open} onOpenChange={onClose}>
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
  height: 100vh;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledFooter = styled.div``;
