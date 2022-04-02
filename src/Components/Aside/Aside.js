import React, { useContext } from "react";
import { GlobalContext } from "../../Global/GlobalContext";
import { ContainAside, ContainerSeason } from "./style";
import { useNavigate } from "react-router-dom";

export const Aside = () => {
  const { episodes, getPersonagens } = useContext(GlobalContext);

  const navigate = useNavigate("episodios");

  const listEpisodes =
    episodes &&
    episodes.map((item, id) => {
      return (
        <ContainerSeason
          onClick={() => getPersonagens(item.id, navigate("episodios"))}
          key={id}
          style={{
            padding: "5px",
            margin: "8px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          {item.episode} - {item.name}
        </ContainerSeason>
      );
    });

  return <ContainAside>{listEpisodes}</ContainAside>;
};
