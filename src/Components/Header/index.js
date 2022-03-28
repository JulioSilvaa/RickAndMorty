import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../Global/GlobalContext";
import axios from "axios";
import {
  ContainerHeader,
  ContainerTitleLogo,
  ContainerLogo,
  Containertitle,
} from "./styleHeader";

import logo from "../../assets/logo.png";
import { TextField } from "@material-ui/core";
import { BaseUrl } from "./../../Constants/BaseUrl";

export const Header = ({ title }) => {
  const { setInputValue, inputValue, setCharacterFiltered } =
    useContext(GlobalContext);

  function handleSubmit(e) {
    e.preventDefault();
    getCharacterFiltered();
  }
  const getCharacterFiltered = () => {
    axios
      .get(`${BaseUrl}?page=2&name=${inputValue}`)
      .then((res) => {
        setCharacterFiltered(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {}, []);

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <ContainerHeader>
      <ContainerTitleLogo>
        <ContainerLogo>
          <img src={logo} alt="logo da página" />
        </ContainerLogo>
        <Containertitle>
          <h1>{title}</h1>
        </Containertitle>
        <form type="submit" onSubmit={handleSubmit}>
          <TextField
            style={{ backgroundColor: "transparent" }}
            fullWidth
            id="standard-basic"
            label="Pesquisar"
            onChange={onChangeInput}
            value={inputValue}
          />
        </form>
      </ContainerTitleLogo>
    </ContainerHeader>
  );
};
