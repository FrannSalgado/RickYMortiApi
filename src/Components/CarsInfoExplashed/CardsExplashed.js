import React, { useState, useEffect } from "react";
import {
  CardCity,
  CardGender,
  CardOrigin,
  CardSpecies,
  CardDataContainerExplashed,
  CardsChapters,
  CardsExplashedContainer,
  CardsImageExplashed,
  CardsInfoContainerExplashed,
  CardsNameExplashed,
  CardsStatusExplashed,
  CardsStatusPointExplashed,
  CrucialInfoContainer,
  CardsGeneralInfo,
  CardsChaptersContainer,
} from "./CardsExplashedStyled";
import { CardStatusContainer } from "../cards/cardsStyle";
import { fetchEpisodeData } from "../Hooks/apiRequest";
import Capitulos from "../enlaces/enlacesHBOMax";
import ButtonCross from "../butttons/ButtonCross";

const CardsExplashed = (props, { handleOnclick }) => {
  const {
    image,
    name,
    id,
    species,
    gender,
    status,
    location,
    origin,
    episode,
  } = props;

  const [episodes, setEpisodes] = useState([]);
  const [episodesData, setEpisodesData] = useState([]);

  useEffect(() => {
    const getChapterNumber = () => {
      const episodeNumbers = episode.map((link) => {
        const episodeId = parseInt(link.split("/").pop());
        return episodeId;
      });
      setEpisodes(episodeNumbers);
    };

    getChapterNumber();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const episodeData = await fetchEpisodeData(episodes);
      setEpisodesData(episodeData);
    };

    fetchData();
  }, [episodes]);

  const putChapterLinks = (id) => {
    const foundEpisode = Capitulos.find((episode) => episode.id === id);
    if (foundEpisode) {
      return foundEpisode.link;
    }
    return null;
  };

  return (
    <CardsExplashedContainer>
      <CrucialInfoContainer>
        <ButtonCross onClick={() => openModal({})}></ButtonCross>
        <CardsImageExplashed src={image} alt={name}></CardsImageExplashed>
        <CardDataContainerExplashed>
          <CardsNameExplashed>Name: {name}</CardsNameExplashed>
          <CardSpecies>Species: {species}</CardSpecies>
          <CardGender>Gender: {gender}</CardGender>
          <CardsStatusExplashed>
            Status: {status}
            <CardsStatusPointExplashed
              status={status}
            ></CardsStatusPointExplashed>
          </CardsStatusExplashed>

          <CardCity>Location: {location.name}</CardCity>
          <CardOrigin>Origin: {origin.name}</CardOrigin>
        </CardDataContainerExplashed>
      </CrucialInfoContainer>

      <CardsInfoContainerExplashed>
        <CardsGeneralInfo>Episodes:</CardsGeneralInfo>
        <CardsChaptersContainer>
          {episodesData.map((episodeX) => {
            return (
              <CardsChapters
                key={episodeX.id}
                href={putChapterLinks(episodeX.id)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {episodeX.id}: "{episodeX.name}"
              </CardsChapters>
            );
          })}
        </CardsChaptersContainer>
      </CardsInfoContainerExplashed>
    </CardsExplashedContainer>
  );
};

export default CardsExplashed;
