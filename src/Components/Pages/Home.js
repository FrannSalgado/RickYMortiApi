import React, { useState, useEffect, useContext } from "react";
import { getCharacters } from "../Hooks/apiRequest";
import CharacterCards from "../cards/Cards";
import { HomeCardsContainer, MesseksVdo, Top } from "./HomeStyled";
import ButtonPortal from "../butttons/ButtonPortal";
import Navbar from "../navbar/Navbar";
import CardsExplashed from "../CarsInfoExplashed/CardsExplashed";
import { DataContext } from "../context/DataContexts";
import { useModal } from "../Hooks/useModal";
import SrMesseks from "../messeks/SrMesseks";

function Home() {
  const { isOpen, setIsOpen, modalInfo, setModalInfo } =
    useContext(DataContext);
  const handleModal = useModal();
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
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

  return (
    <HomeCardsContainer>
      <Navbar></Navbar>
      <SrMesseks />
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

      {isOpen ? <CardsExplashed {...modalInfo}></CardsExplashed> : null}
    </HomeCardsContainer>
  );
}

export default Home;
