import React, { useState, useEffect } from "react";
import axios from "axios";
import { GlobalContext } from "./GlobalContext";
import { BaseUrl } from "./../Constants/BaseUrl";

export const GlobalState = (props) => {
  const [character, setCharacter] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [personFiltered, setPersonFiltered] = useState()

  console.log(personFiltered, "global");

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = () => {
    setLoading(true);
    axios
      .get(BaseUrl)
      .then((res) => {
        setCharacter(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const data = {
    character,
    isModalVisible,
    setIsModalVisible,
    isLoading,
    setPersonFiltered,
    personFiltered
  };

  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  );
};
