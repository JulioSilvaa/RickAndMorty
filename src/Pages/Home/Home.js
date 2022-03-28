import React, { useContext } from "react";
import { Aside } from "../../Components/Aside/Aside";
import { CharacterCards } from "../../Components/Cards/CharacterCards";
import { Header } from "../../Components/Header";
import { GlobalContext } from "../../Global/GlobalContext";
import { ContainerHome, Loading } from "./styleHome";
import { Modal } from "../../Components/Modal";

export const Home = () => {
  const { character, isModalVisible, setIsModalVisible, isLoading } =
    useContext(GlobalContext);

  const chracter =
    character &&
    character.map((person, id) => {
      return <CharacterCards key={id} person={person} personID={person} />;
    });

  return (
    <>
      <Header title={"Rick and Morty API"} />

      <Aside />
      {isLoading ? (
        <Loading>Carregando ...</Loading>
      ) : (
        <ContainerHome>{chracter}</ContainerHome>
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
