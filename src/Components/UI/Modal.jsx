import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.sass';

const Backdrop = ({ onClose }) => <div onClick={onClose} className={classes.backdrop} />;

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = ({ onClose, children }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
