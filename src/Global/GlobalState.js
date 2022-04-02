import React, { useState, useEffect } from "react";
import axios from "axios";
import { GlobalContext } from "./GlobalContext";
import { BaseUrl } from "./../Constants/BaseUrl";
import { UrlEpisode } from "./../Constants/BaseUrlEpisode";

export const GlobalState = (props) => {
  const [character, setCharacter] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [personFiltered, setPersonFiltered] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [characterFiltered, setCharacterFiltered] = useState();
  const [episodes, setEpisodes] = useState([]);
  const [listCharacters, setListCharacters] = useState([]);
  const [renderListCharacter, setRenderListCharacter] = useState([]);

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

  //reload automatico
  useEffect(() => {
    const intersectionobserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCurrentPage((currentPageInsideState) => currentPageInsideState + 1);
      }
    });
    intersectionobserver.observe(document.querySelector("#sentinela"));
    return () => intersectionobserver.disconnect();
  }, []);

  // pegando os episodios
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${UrlEpisode}`)
      .then((res) => {
        setEpisodes(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const newList = [];

  useEffect(() => {
    setLoading(true);
    getPersonagens();
    setLoading(false);
  }, []);

  const getPersonagens = (id) => {
    let Filtered =
      episodes &&
      episodes.filter((item) => {
        return item.id === id;
      });
    Filtered.forEach((element) => {
      setListCharacters(element.characters);
    });

    listCharacters.forEach((element) => {
      setLoading(true);
      axios
        .get(element)
        .then((res) => {
          newList.push(res.data.image);
          setRenderListCharacter([ ...newList]);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

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
    episodes,
    setEpisodes,
    listCharacters,
    setListCharacters,
    renderListCharacter,
    setRenderListCharacter,
    getPersonagens,
  };

  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  );
};
