import React from "react";
import {
  ButtonNextPortal,
  ButtonNextPortalContainer,
} from "./buttonPortalStyle";

const ButtonPortal = (props) => {
  return (
    <ButtonNextPortalContainer>
      <ButtonNextPortal onClick={props.handleClick}>
        <span>{props.text}</span>
      </ButtonNextPortal>
    </ButtonNextPortalContainer>
  );
};

export default ButtonPortal;
