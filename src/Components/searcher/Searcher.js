import React, { useContext, useState, useEffect } from "react";
import SrMesseks from "../messeks/SrMesseks";
import {
  ContainerRight,
  ContainerRightDown,
  HelpText,
  MesseksAndSearchBarContainer,
  SearcherBar,
  SearcherSection,
} from "./SearcherStyled";
import ButtonActiveMesseks from "../butttons/ButtonSearcher/ButtonActiveMesseks";
import { DataContext } from "../../context/DataContexts";
import { getSearchCharacters } from "../../services/apiRequest";

const SearcherMesseks = () => {
  const {
    IsOpenSearchBar,
    InputText,
    SetInputText,
    setSearchBarInfo,
    SearchBarInfo,
  } = useContext(DataContext);
  useEffect(() => {
    async function fetchDatas() {
      setSearchBarInfo(await getSearchCharacters(InputText));
    }
    fetchDatas();
  }, [InputText]);

  return (
    <SearcherSection id="top">
      {IsOpenSearchBar && (
        <MesseksAndSearchBarContainer>
          <SrMesseks />
          <SearcherBar
            placeholder="Search Character"
            onChange={(e) => {
              SetInputText(e.target.value);
            }}
          />
        </MesseksAndSearchBarContainer>
      )}
      {IsOpenSearchBar ? (
        <ContainerRightDown>
          <HelpText>
            <p>Need Help? ➡</p>
          </HelpText>
          <ButtonActiveMesseks></ButtonActiveMesseks>
        </ContainerRightDown>
      ) : (
        <ContainerRight>
          <HelpText>
            <p>Need Help? ➡</p>
          </HelpText>
          <ButtonActiveMesseks></ButtonActiveMesseks>
        </ContainerRight>
      )}
    </SearcherSection>
  );
};

export default SearcherMesseks;
