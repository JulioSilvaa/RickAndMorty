import React from "react";
import {
  ContainerHeader,
  ContainerTitleLogo,
  ContainerLogo,
  Containertitle,
} from "./styleHeader";

import logo from "../../assets/logo.png";

export const Header = ({ title }) => {
  return (
    <ContainerHeader>
      <ContainerTitleLogo>
        <ContainerLogo>
          <img src={logo} alt="logo da página" />
        </ContainerLogo>
        <Containertitle>
          <h1>{title}</h1>
        </Containertitle>
      </ContainerTitleLogo>
    </ContainerHeader>
  );
};
