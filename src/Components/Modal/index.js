import React, { useContext } from "react";
import { GlobalContext } from "../../Global/GlobalContext";

import {
  ContainerModal,
  ModalViewer,
  ButtonCloseModal,
  ModalMain,
  ContainerInfos,
} from "./style";

export const Modal = ({ id = "modal", children, onClose }) => {
  const { personFiltered } = useContext(GlobalContext);

  const handleOutSideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  return (
    <ContainerModal id={id} onClick={handleOutSideClick}>
      <ModalViewer>
        <ButtonCloseModal onClick={onClose} />
        <ModalMain>
          <ContainerInfos>
            <p>
              <b>Nome:</b> {personFiltered.name}
            </p>
            <p>
              <b>Genero:</b> {personFiltered.gender}
            </p>
            <p>
              <b>Localização:</b> {personFiltered.location.name}
            </p>
            <p>
              <b>Especie:</b> {personFiltered.species}
            </p>
            <p>
              <b>Status:</b> {personFiltered.status}
            </p>
            <p>
              <b>Origem:</b> {personFiltered.origin.name}
            </p>
          </ContainerInfos>
          <div>
            <img src={personFiltered.image} alt="imagem do personagem" />
          </div>
        </ModalMain>
        <div className="modal_content">{children}</div>
      </ModalViewer>
    </ContainerModal>
  );
};
