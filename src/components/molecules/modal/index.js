import { createPortal } from 'react-dom';
import Dialog from '@mui/material/Dialog';

const Modal = ({ children, handleClose, isOpen }) => {
  return createPortal(
    <Dialog open={isOpen} onClose={handleClose} fullWidth>
      {children}
    </Dialog>,
    document.body
  );
};

Modal.defaultProps = {
  isOpen: false,
};

export default Modal;
