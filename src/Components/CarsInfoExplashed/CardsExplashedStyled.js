import React from "react";
import styled, { css } from "styled-components";

export const CardsExplashedContainer = styled.div`
  position: fixed;
  width: 650px;
  height: 550px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 40;
  border-radius: 30px;
  overflow-y: hidden;
  background-color: rgb(66 66 66 / 60%);
  backdrop-filter: blur(11px);

  @media screen and (max-width: 710px) {
    width: 450px;
    height: 550px;
    left: 48.5%;
  }
  @media screen and (max-width: 470px) {
    width: 90%;
    height: 550px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    gap: 6px;
  }
`;

export const CardsInfoContainerExplashed = styled.div`
  color: white;

  font-family: "Source Code Pro", monospace;
  width: 100%;
  height: 50%;
  @media screen and (max-width: 435px) {
    height: 30%;
  }
`;
export const CrucialInfoContainer = styled.div`
  display: flex;
  color: white;
  justify-content: space-evenly;
  align-items: center;
  height: 50%;
  position: relative;

  @media screen and (max-width: 435px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 65%;
  }
`;

export const CardsImageExplashed = styled.img`
  border-radius: 10px;
  max-width: 35%;
  @media screen and (max-width: 710px) {
    min-width: 190px;
  }
  @media screen and (max-width: 470px) {
    min-width: 180px;
  }
`;

export const CardsNameExplashed = styled.h2`
  text-align: start;

  @media screen and (max-width: 710px) {
    font-size: 15px;
  }
`;
export const CardDataContainerExplashed = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 6px;
  text-align: start;
  width: 40%;
  min-width: 173px;
  @media screen and (max-width: 710px) {
    font-size: 13px;
  }
  @media screen and (max-width: 435px) {
    height: 50%;
    gap: 3px;
    width: 90%;
  }
`;

export const CardsStatusExplashed = styled.div`
  display: flex;
  gap: 10px;
`;

export const CardsGeneralInfo = styled.p`
  width: 100%;
  height: 10%;
  text-align: center;
  text-decoration: underline;
  font-size: 17px;
`;
export const CardsChaptersContainer = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 14px;
  font-family: "Source Code Pro", monospace;
  width: 100%;
  height: 90%;
  gap: 12px;
  text-align: start;
  overflow-y: scroll;
  padding-left: 1px;
`;
export const CardsChapters = styled.a`
  color: white;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
  font-size: 11px;
  width: 180px;
  height: 50px;

  padding-left: 7px;

  display: flex;
  align-items: center;
`;
export const CardCity = styled.p``;
export const CardGender = styled.p``;
export const CardOrigin = styled.p``;
export const CardSpecies = styled.p``;

export const CardsStatusPointExplashed = styled.div`
  width: 1.3rem;
  height: 1.3rem;
  appearance: none;
  border-radius: 50rem;
  border: solid 1px black;
  background-color: grey;
  ${(props) =>
    props.status === "Dead" &&
    css`
      background: linear-gradient(
        45deg,
        #c23616,
        #8f2717,
        #c23616,
        #942d1d,
        #c23616
      );
    `}
  ${(props) =>
    props.status === "Alive" &&
    css`
      background: linear-gradient(45deg, #50785a, #608d6a, #55b265, #90da97);
    `}
`;
