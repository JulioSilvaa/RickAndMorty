import React from "react";

import { ContainerModal, ModalViewer, ButtonCloseModal } from "./style";

export const Modal = ({ id = "modal", children, onClose }) => {
  const handleOutSideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  return (
    <ContainerModal id={id} onClick={handleOutSideClick}>
      <ModalViewer>
        <ButtonCloseModal onClick={onClose} />
        <div className="modal_Header"></div>
        <div className="modal_content">{children}</div>
      </ModalViewer>
    </ContainerModal>
  );
};
