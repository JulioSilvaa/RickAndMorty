import styled from "styled-components";

export const ContainerModal = styled.div`
  background-color: rgba(255,255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  -webkit-transition: opacity 400ms ease-in;
  -moz-transition: opacity 400ms ease-in;
  transition: opacity 400ms ease-in;
`;

export const ModalViewer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 60%;
  height: 60%;
  top: 25%;
  right: 0;
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
    background-color: red;
  }
  &::after {
    transform: rotate(45deg);
  }
  &::before {
    transform: rotate(-45deg);
  }
`;

export const ModalMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ContainerInfos = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-size: 1.2rem;
    font-weight: 10px;
    font-weight: 400;
    color: #2d2327;
  }
`;
