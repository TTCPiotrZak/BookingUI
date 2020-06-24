import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./modal.scss";

const Modal = React.memo(({ children, closeModal }) => {
  const domEl = document.getElementById("modal-root");

  if (!domEl) return null;

  return ReactDOM.createPortal(<div>{children}</div>, domEl);
});

export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => setIsVisible(!isVisible);

  const RenderModal = ({ children }) => (
    <div>
      {isVisible && (
        <div>
          <div onClick={toggle} className="back-drop"></div>
          <Modal closeModal={toggle}>
            <div>
              <div
                className="modal-wrapper"
                style={{
                  transform: toggle ? "translateY(0vh)" : "translateY(-20vh)",
                  display: toggle ? "inline-block" : "none",
                }}
              >
                <div className="modal-header">
                  <span className="close-modal-btn" onClick={toggle}>
                    ×
                  </span>
                </div>
                <div className="modal-body">
                  <p>{children}</p>
                </div>
              </div>
            </div>
            }
          </Modal>
        </div>
      )}
    </div>
  );

  return {
    toggle,
    RenderModal,
  };
};

export default Modal;
