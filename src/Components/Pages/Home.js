import React, { useState, useEffect } from "react";
import { getCharacters } from "../Hooks/apiRequest";
import CharacterCards from "../cards/Cards";
import {
  HomeButtonNext,
  HomeButtonNextContainer,
  HomeCardsContainer,
  Top,
} from "./HomeStyled";
import ButtonPortal from "../butttons/ButtonPortal";
import Navbar from "../navbar/Navbar";
import CardsExplashed from "../CarsInfoExplashed/CardsExplashed";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await getCharacters(page);
      setCharacters([...characters, ...data]);
    }
    fetchData();
  }, [page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };
  const handleModal = (props) => {
    setIsOpen((state) => {
      setIsOpen(!state);
      state ? setModalInfo(null) : setModalInfo(props);
    });
  };

  return (
    <HomeCardsContainer>
      <Navbar></Navbar>
      <Top />
      {characters.map((character) => (
        <CharacterCards
          key={character.id}
          {...character}
          openModal={handleModal}
        />
      ))}
      <ButtonPortal
        handleClick={handleNextPage}
        text="Siguiente"
      ></ButtonPortal>

      {isOpen ? (
        <CardsExplashed openModal={handleModal} {...modalInfo}></CardsExplashed>
      ) : null}
    </HomeCardsContainer>
  );
}

export default Home;
