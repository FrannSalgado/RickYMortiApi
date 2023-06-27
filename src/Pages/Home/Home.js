import React, { useState, useEffect, useContext } from "react";
import { getCharacters } from "../../services/apiRequest";
import CharacterCards from "../../Components/cards/Cards";
import { HomeCardsContainer } from "./HomeStyled";
import ButtonPortal from "../../Components/butttons/PortalButton/ButtonPortal";
import Navbar from "../../Components/navbar/Navbar";
import CardsExplashed from "../../Components/CarsInfoExplashed/CardsExplashed";
import { DataContext } from "../../context/DataContexts";
import SearcherMesseks from "../../Components/searcher/Searcher";
import NotFoundCharacterCard from "../../Components/cards/NotFoundCharacterCard/NotFoundCharacterCard";

function Home() {
  const { isOpen, modalInfo, SearchBarInfo, IsOpenSearchBar, InputText } =
    useContext(DataContext);
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
  const PrintCards = (data) => {
    if (data.length === 0) {
      return <NotFoundCharacterCard />;
    }
    return data.map((character) => (
      <CharacterCards key={character.id} {...character} />
    ));
  };

  return (
    <HomeCardsContainer>
      <Navbar></Navbar>
      <SearcherMesseks></SearcherMesseks>

      {InputText !== "" && IsOpenSearchBar
        ? PrintCards(SearchBarInfo)
        : PrintCards(characters)}

      {InputText === "" ? (
        <ButtonPortal handleClick={handleNextPage} text="Next"></ButtonPortal>
      ) : null}

      {isOpen ? <CardsExplashed {...modalInfo}></CardsExplashed> : null}
    </HomeCardsContainer>
  );
}

export default Home;
