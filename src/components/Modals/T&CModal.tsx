import React from "react";
import "./T&CModal.css";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="TC-modal-overlay">
      <div className="TC-modal-content">
        {children}
        <button className="modal-close" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
