import React, { useContext } from "react";
import { Aside } from "../Components/Aside/Aside";
import { CharacterCards } from "../Components/Cards/CharacterCards";
import { Header } from "../Components/Header";
import { GlobalContext } from "../Global/GlobalContext";
import { ContainerHome, Loading } from "./styleHome";
import { Modal } from "../Components/Modal";
import { CharacterFiltered } from "../Components/Cards/CharacterFiltered";

export const Home = () => {
  const {
    character,
    isModalVisible,
    setIsModalVisible,
    isLoading,
    characterFiltered,
    inputValue,
  } = useContext(GlobalContext);

  const chracter =
    character &&
    character.map((person, id) => {
      return <CharacterCards key={id} person={person} personID={person} />;
    });

  const listOfCharacterFiltered =
    characterFiltered &&
    characterFiltered.map((item, id) => {
      return <CharacterFiltered key={id} personFiltered={item} />;
    });

  return (
    <>
      <Header title={"Rick and Morty API"} />

      <Aside />
      {isLoading ? (
        <Loading>Carregando ...</Loading>
      ) : inputValue === "" ? (
        <ContainerHome>{chracter}</ContainerHome>
      ) : (
        <ContainerHome>{listOfCharacterFiltered}</ContainerHome>
      )}

      {!isLoading ? (
        isModalVisible ? (
          <Modal
            onClose={() => {
              setIsModalVisible(false);
            }}
          ></Modal>
        ) : null
      ) : (
        <h4>Carregando ...</h4>
      )}
      <div id="sentinela" />
    </>
  );
};
