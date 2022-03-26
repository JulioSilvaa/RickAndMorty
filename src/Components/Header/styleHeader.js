import styled from "styled-components";

export const ContainerHeader = styled.div`
  grid-area: h;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const ContainerTitleLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 60%;
  height: 8vh;

  img {
    width: 6%;
    object-fit: cover;
  }

  h1 {
    font-size: 4em;
  }
`;
