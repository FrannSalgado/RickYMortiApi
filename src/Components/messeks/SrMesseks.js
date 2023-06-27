import React from "react";
import {
  MesseksContainer,
  MesseksGif,
  PortalGif,
  PortalGifContainer,
  SpechBubble,
} from "./SrMesseksStyled";
import mrMesseksGif from "../../assets/meeseeksGif.gif";
import portalGif from "../../assets/Portal.gif";
import messeksSpeechBubble from "../../assets/messeksSpeechBubble.gif";

const SrMesseks = () => {
  return (
    <MesseksContainer>
      <PortalGifContainer>
        <SpechBubble src={messeksSpeechBubble}></SpechBubble>
        <MesseksGif src={mrMesseksGif}></MesseksGif>
        <PortalGif src={portalGif}></PortalGif>
      </PortalGifContainer>
    </MesseksContainer>
  );
};

export default SrMesseks;
