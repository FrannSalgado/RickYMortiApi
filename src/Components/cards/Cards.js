import React, { useContext } from "react";
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
import { DataContext } from "../context/DataContexts";
import { useModal } from "../Hooks/useModal";
const CharacterCards = (props) => {
  const handleModal = useModal(props);

  return (
    <CardsContainer id={props.id} onClick={handleModal}>
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
