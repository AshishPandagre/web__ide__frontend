import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({ children, className }) => {
  return ReactDOM.createPortal(
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 z-40 bg-black/50"></div>
      <div
        className="fixed z-40 top-1/2 left-1/2"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div
          className={`flex flex-col text-white bg-[#252525] py-6 rounded-xl ${className}`}
        >
          {children}
        </div>
      </div>
    </>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
