import React, { useContext } from "react";
import { GlobalContext } from "../../Global//GlobalContext";
import { ContainerCharacterInfo } from "./ContainerCharacterInfo";
import { Animated } from "react-animated-css";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

export const CharacterCards = ({ person }) => {
  const { setIsModalVisible, setPersonFiltered } = useContext(GlobalContext);

  const handleClick = () => {
    setPersonFiltered(person);
  };

  return (
    <Animated
      animationIn="bounceInDown"
      animationOut="bounceOutUp"
      animationInDuration={1500}
      isVisible={true}
    >
      <ContainerCharacterInfo>
        <Card>
          <CardActionArea>
            <CardContent>
              <img src={person.image} alt="imagem do personagem" />
              <Typography gutterBottom variant="h6" component="h2">
                {person.name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              onClick={() => handleClick(person.id, setIsModalVisible(true))}
              variant="contained"
              color="secondary"
            >
              Detalhes
            </Button>
          </CardActions>
        </Card>
      </ContainerCharacterInfo>
    </Animated>
  );
};
