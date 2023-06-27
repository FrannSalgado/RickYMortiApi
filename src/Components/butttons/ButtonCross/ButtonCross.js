import React, { useContext } from "react";
import { Cross } from "../ButtonCross/buttonCrosStyled";
import { DataContext } from "../../../context/DataContexts";

const ButtonCross = () => {
  const { handleModal } = useContext(DataContext);

  return <Cross onClick={handleModal}>X</Cross>;
};

export default ButtonCross;
