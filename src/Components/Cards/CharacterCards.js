import React, { useContext } from "react";
import { GlobalContext } from "../../Global//GlobalContext";
import { ContainerCharacterInfo } from "./ContainerCharacterInfo";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export const CharacterCards = ({ person }) => {
  const { setIsModalVisible, setPersonFiltered } = useContext(GlobalContext);

  const handleClick = () => {
    setPersonFiltered(person);
  };

  return (
    <ContainerCharacterInfo>
      <Card>
        <CardActionArea
          onClick={() => handleClick(person.id, setIsModalVisible(true))}
        >
          <CardContent>
            <img src={person.image} alt="imagem do personagem" />
            <Typography gutterBottom variant="h6" component="h2">
              {person.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </ContainerCharacterInfo>
  );
};
