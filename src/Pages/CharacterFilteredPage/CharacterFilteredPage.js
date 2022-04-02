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
      <div style={{ margin: "20px auto" }}>
        <button
          style={{
            width: "200px",
            height: "50px",
            borderRadius: "8px",
            backgroundColor: "white",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          Voltar
        </button>
      </div>
      <Aside />
      <ContainerHome>
        {listOfCharacterFiltered}
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
