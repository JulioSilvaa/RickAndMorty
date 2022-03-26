import styled from "styled-components";

export const ContainerModal = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
`;

export const ModalViewer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 60%;
  height: 60%;
`;

export const ButtonCloseModal = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  width: 32px;
  height: 32px;
  right: calc(-100% + 64px);
  top: 16px;
  cursor: pointer;
  display: flex;
  position: relative;
  align-items: center;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 2.5px;
    height: 24px;
    background-color: #000;
  }
  &::after {
    transform: rotate(45deg);
  }
  &::before {
    transform: rotate(-45deg);
  }
`;
