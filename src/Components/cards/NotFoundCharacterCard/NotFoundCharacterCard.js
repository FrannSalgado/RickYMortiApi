import React from "react";
import {
  AngryRickGif,
  NotFoundCharacterContainer,
  CharacterNotFoundText,
} from "./NotFoundCharacterCardStyled";

import AssetAngryRickGif from "../../../assets/angry-rick-sanchez.gif";
const NotFoundCharacterCard = () => {
  return (
    <NotFoundCharacterContainer>
      <CharacterNotFoundText>
        We've got this vast multiverse with infinite characters and endless
        possibilities, and you can't even write a sentence properly? Seriously?
        How hard is it to put words together? Figure it out yourself, 'cause I
        ain't wasting my time helping you with basic writing skills.
      </CharacterNotFoundText>
      <AngryRickGif src={AssetAngryRickGif}></AngryRickGif>
    </NotFoundCharacterContainer>
  );
};

export default NotFoundCharacterCard;
