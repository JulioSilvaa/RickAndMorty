import React, { useContext } from "react";
import { Aside } from "../Components/Aside/Aside";
import { CharacterCards } from "../Components/Cards/CharacterCards";
import { Header } from "../Components/Header";
import { GlobalContext } from "../Global/GlobalContext";
import { ContainerHome } from "./styleHome";
import { Modal } from "../Components/Modal";

export const Home = () => {
  const { character, isModalVisible, setIsModalVisible, isLoading } =
    useContext(GlobalContext);

  const chracter =
    character &&
    character.map((person) => {
      return (
        <CharacterCards key={person.id} person={person} personID={person.id} />
      );
    });

  return (
    <>
      <Header title={"Rick and Morty API"} />
      <Aside />

      <ContainerHome>{chracter}</ContainerHome>
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
    </>
  );
};
