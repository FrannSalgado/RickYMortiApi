import React, { useContext } from "react";
import SpawnMesseksVideo from "../../../assets/SpawnMesseksVideo.mp4";
import {
  SpawnVideoMesseks,
  ButtonActiveSearcher,
} from "./ButtonActiveMesseksStyled";
import { DataContext } from "../../../context/DataContexts";

const ButtonActiveMesseks = () => {
  const { handleSearchBar, IsOpenSearchBar, SetInputText } =
    useContext(DataContext);
  const handleVideoClick = (event) => {
    SetInputText("");
    event.target.play();
    handleSearchBar();
  };

  return (
    <ButtonActiveSearcher isOpen={IsOpenSearchBar}>
      <SpawnVideoMesseks
        src={SpawnMesseksVideo}
        type="video/mp4"
        onClick={handleVideoClick}
        controls={false}
      ></SpawnVideoMesseks>
    </ButtonActiveSearcher>
  );
};

export default ButtonActiveMesseks;
