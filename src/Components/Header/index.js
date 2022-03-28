import React, { useContext } from "react";
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
import { useNavigate } from "react-router-dom";

export const Header = ({ title }) => {
  const { setInputValue, inputValue, setCharacterFiltered } =
    useContext(GlobalContext);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    getCharacterFiltered();

    navigate("/filtrados");
  }
  const getCharacterFiltered = () => {
    axios
      .get(`${BaseUrl}?page=2&name=${inputValue}`)
      .then((res) => {
        setCharacterFiltered(res.data.results);
        setInputValue("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
