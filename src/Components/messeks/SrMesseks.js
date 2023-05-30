import React from "react";
import {
  MesseksContainer,
  MesseksGif,
  PortalGif,
  PortalGifContainer,
} from "./SrMesseksStyled";
import mrMesseksGif from "../assets/meeseeksGif.gif";
import portalGif from "../assets/Portal.gif";

const SrMesseks = () => {
  return (
    <MesseksContainer>
      <PortalGifContainer>
        <MesseksGif src={mrMesseksGif}></MesseksGif>
        <PortalGif src={portalGif}></PortalGif>
      </PortalGifContainer>
    </MesseksContainer>
  );
};

export default SrMesseks;
