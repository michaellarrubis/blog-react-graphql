import React from "react";

const Modal = ({ onShow, text, onClose, onOk }) => {
  return (
    <div className={!onShow ? "modal u-hide" : "modal"}>
      <div className="modal-content">
        <div className="modal-body">
          <p className="modal-text">{text}</p>
        </div>
        <div className="modal-action">
          <button className="modal-button" onClick={onOk}>
            OK
          </button>
          <button className="modal-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
