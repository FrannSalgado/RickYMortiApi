import React from "react";
import { Cross } from "./buttonCrosStyled";

const ButtonCross = ({ onClick }) => {
  return <Cross onClick={onClick}>X</Cross>;
};

export default ButtonCross;
