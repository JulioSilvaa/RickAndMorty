import React, { useContext } from "react";
import { CharacterCardSeasonList } from "../../Components/Cards/CharacterCardSeasonList";
import { Header } from "../../Components/Header";
import { ContainerHome, Loading } from "../Home/styleHome";
import { GlobalContext } from "./../../Global/GlobalContext";
import { useNavigate } from "react-router-dom";

export const SeasonPage = () => {
  const { renderListCharacter, isLoading } = useContext(GlobalContext);
  const navigate = useNavigate();

  const renderImage =
    renderListCharacter &&
    renderListCharacter.map((item, id) => {
      return <CharacterCardSeasonList key={id} item={item} />;
    });

  return (
    <>
      <Header title={"Personagens Por Episódio"} />
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

      <ContainerHome>
        {isLoading ? <Loading>Carregando ...</Loading> : renderImage.lenght < 1 ? <Loading/> : renderImage}
      </ContainerHome>
    </>
  );
};
