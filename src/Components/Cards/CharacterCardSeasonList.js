import React from "react";
import { ContainerCharacterInfo } from "./ContainerCharacterInfo";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";


export const CharacterCardSeasonList = ({ item }) => {
  return (
    <ContainerCharacterInfo>
      <Card>
        <CardActionArea>
          <CardContent>
            <img src={item} alt="imagem do personagem" />
            <Typography gutterBottom variant="h6" component="h2">
              {item.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
      </Card>
    </ContainerCharacterInfo>
  );
};
