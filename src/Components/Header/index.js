import React from "react";
import { ContainerHeader, ContainerTitleLogo } from "./styleHeader";
import { Animated } from "react-animated-css";

import logo from "../../assets/logo.png";

export const Header = ({ title }) => {
  return (
    <ContainerHeader>
      <ContainerTitleLogo>
        <img src={logo} alt="logo da página" />
        <Animated
          animationIn="jello"
          animationOut="fadeOut"
          isVisible={true}
          animationInDuration={1500}
          animationOutDelay={1000}
        >
          <h1>{title}</h1>
        </Animated>
      </ContainerTitleLogo>
    </ContainerHeader>
  );
};
