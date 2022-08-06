import "./modal-portal.css";
import { createPortal } from "react-dom";

const ModalPortal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;
  return createPortal(
    <div className="modal-wrapper fixed h-full w-full flex-col flex-justify-center flex-align-center">
      <div className="modal-content-container relative px-5 py-3 w-40-pc rounded-lg">
        {children}
        <button
          className="close-btn btn btn-icon absolute p-1"
          onClick={onClose}
        >
          <span>
            <i className="fa-regular fa-circle-xmark fa-2xl"></i>
          </span>
        </button>
      </div>
    </div>,
    document.getElementById("modal-portal")
  );
};

export { ModalPortal };
