import React from "react";
import {
  CardStatusContainer,
  CardsContainer,
  CardsImage,
  CardsInfoContainer,
  CardsName,
  CardsStatus,
  CardsStatusPoint,
  CardsOrigin,
} from "./cardsStyle";

const CharacterCards = (props) => {
  return (
    <CardsContainer id={props.id}>
      <CardsImage src={props.image} alt={props.name}></CardsImage>
      <CardsInfoContainer>
        <CardsName>{props.name}</CardsName>
        <CardsOrigin>{props.origin.name}</CardsOrigin>
        <CardStatusContainer>
          <CardsStatus>{props.status}</CardsStatus>
          <CardsStatusPoint status={props.status} />
        </CardStatusContainer>
      </CardsInfoContainer>
    </CardsContainer>
  );
};

export default CharacterCards;
