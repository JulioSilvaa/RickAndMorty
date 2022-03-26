import styled from "styled-components";

export const ContainerHeader = styled.div`
  grid-area: h;
  display: flex;
  align-items: center;
  background-color: #b3c0a4;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const ContainerTitleLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 60%;
  height: 8vh;
`;

export const ContainerLogo = styled.div`
  width: 100px;
  padding: 8px;

  img {
    width: 75%;
  }
`;

export const Containertitle = styled.div`
  max-width: 600px;
`;
