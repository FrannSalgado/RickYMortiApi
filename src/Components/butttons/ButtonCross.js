import React from "react";
import { Cross } from "./buttonCrosStyled";
import { useModal } from "../Hooks/useModal";

const ButtonCross = () => {
  const handleModal = useModal({});

  return <Cross onClick={handleModal}>X</Cross>;
};

export default ButtonCross;
