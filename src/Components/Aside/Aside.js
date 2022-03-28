import React, { useState, useEffect } from "react";
import { ContainAside } from "./style";
import axios from "axios";
import { UrlEpisode } from "../../Constants/BaseUrlEpisode";
import Select from "react-select";

export const Aside = () => {
  const [episodes, setEpisodes] = useState();

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

  const listEpisodes =
    episodes &&
    episodes.map((item, id) => {
      return (
        <p key={id}>
          {item.name} {item.episode} <li>{item.characters}</li>
        </p>
      );
    });

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const MyComponent = () => <Select options={options} />;
  return (
    <ContainAside>
      <div>{listEpisodes}</div>
      <MyComponent />
    </ContainAside>
  );
};
