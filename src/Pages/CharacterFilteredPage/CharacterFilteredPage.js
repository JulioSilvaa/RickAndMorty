import React, { useContext } from "react";
import { GlobalContext } from "./../../Global/GlobalContext";
import { CharacterFiltered } from "./../../Components/Cards/CharacterFiltered";
import { ContainerHome } from "./../Home/styleHome";
import { Modal } from "./../../Components/Modal/index";
import { Header } from "./../../Components/Header/index";
import { Aside } from "./../../Components/Aside/Aside";
import { useNavigate } from "react-router-dom";

export const CharacterFilteredPage = () => {
  const navigate = useNavigate();

  const { isModalVisible, setIsModalVisible, characterFiltered, isLoading } =
    useContext(GlobalContext);

  const listOfCharacterFiltered =
    characterFiltered &&
    characterFiltered.map((item, id) => {
      return <CharacterFiltered key={id} personFiltered={item} />;
    });

  return (
    <>
      <Header title={"Personagens Filtrados"} />
      <Aside />
      <ContainerHome>
        {listOfCharacterFiltered}
        <button onClick={() => navigate("/")}>Voltar</button>
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
      </ContainerHome>
      
    </>
  );
};
