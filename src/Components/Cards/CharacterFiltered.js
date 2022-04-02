import React, { useContext } from "react";
import { GlobalContext } from "../../Global/GlobalContext";
import { ContainerCharacterInfo } from "./ContainerCharacterInfo";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export const CharacterFiltered = ({ personFiltered }) => {
  const { setIsModalVisible, setPersonFiltered } = useContext(GlobalContext);

  const handleClick = () => {
    setPersonFiltered(personFiltered);
  };

  return (
    <ContainerCharacterInfo>
      <Card>
        <CardActionArea
          onClick={() =>
            handleClick(personFiltered.id, setIsModalVisible(true))
          }
        >
          <CardContent>
            <img src={personFiltered.image} alt="imagem do personagem" />
            <Typography gutterBottom variant="h6" component="h2">
              {personFiltered.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </ContainerCharacterInfo>
  );
};
