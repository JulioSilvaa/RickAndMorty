import React, { useState, useEffect } from "react";
import { ContainAside } from "./style";
import axios from "axios";
import { UrlEpisode } from "../../Constants/BaseUrlEpisode";

export const Aside = () => {
  const [episodes, setEpisodes] = useState([]);
  const [listCharacters, setListCharacters] = useState([]);
  const [renderListCharacter, setRenderListCharacter] = useState([]);

  console.log(renderListCharacter);

  useEffect(() => {
    axios
      .get(`${UrlEpisode}`)
      .then((res) => {
        setEpisodes(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getPersonagens();
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

    if (listCharacters) {
      for (const iterator of listCharacters) {
        axios
          .get(iterator)
          .then((res) => {
            setRenderListCharacter(res.data.image);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  const listEpisodes =
    episodes &&
    episodes.map((item, id) => {
      return (
        <div
          onClick={() => getPersonagens(item.id)}
          key={id}
          style={{ border: "1px solid black", padding: "5px", margin: "2px" }}
        >
          {item.episode} - {item.name}
        </div>
      );
    });

  return (
    <ContainAside>
      {listEpisodes}{" "}
      <ul>
        <img src={renderListCharacter} alt="" />
        <img src={renderListCharacter} alt="" />
        <img src={renderListCharacter} alt="" />
        <img src={renderListCharacter} alt="" />
        <img src={renderListCharacter} alt="" />
      </ul>
    </ContainAside>
  );
};
