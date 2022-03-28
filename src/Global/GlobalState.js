import React, { useState, useEffect } from "react";
import axios from "axios";
import { GlobalContext } from "./GlobalContext";
import { BaseUrl } from "./../Constants/BaseUrl";

export const GlobalState = (props) => {
  const [character, setCharacter] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [personFiltered, setPersonFiltered] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [characterFiltered, setCharacterFiltered] = useState();

  useEffect(() => {
    getCharacters();
  }, [currentPage]);

  const getCharacters = () => {
    setLoading(true);
    axios
      .get(`${BaseUrl}/?page=${currentPage}`)
      .then((res) => {
        setCharacter([...character, ...res.data.results]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const intersectionobserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCurrentPage((currentPageInsideState) => currentPageInsideState + 1);
      }
    });
    intersectionobserver.observe(document.querySelector("#sentinela"));
    return () => intersectionobserver.disconnect();
  }, []);

  const data = {
    character,
    isModalVisible,
    setIsModalVisible,
    isLoading,
    setPersonFiltered,
    personFiltered,
    setCurrentPage,
    setInputValue,
    inputValue,
    characterFiltered,
    setCharacterFiltered,
  };

  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  );
};
