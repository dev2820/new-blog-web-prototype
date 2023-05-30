import React, { PropsWithChildren } from "react";
import { useModal } from "@/stores/modal";

const Modal = ({ children }: PropsWithChildren) => {
  const modal = useModal();

  if (!modal.isOpened) {
    return null;
  }

  return (
    <dialog open={modal.isOpened}>
      <div className="modal-content">
        {children}
        <button className="modal-close" onClick={modal.closeModal}>
          Close
        </button>
      </div>
    </dialog>
  );
};

export default Modal;
