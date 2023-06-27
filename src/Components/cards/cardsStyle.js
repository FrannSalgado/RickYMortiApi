import React from "react";
import styled, { css } from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 140px;
  width: 400px;
  border: 1px solid black;
  background-color: #000000ba;
  border-radius: 70px;
  margin: 20px;
  cursor: pointer;
`;

export const CardsInfoContainer = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 14px;
  font-family: "Source Code Pro", monospace;
  text-align: center;
  width: 60%;
  gap: 10px;
`;
export const CardsImage = styled.img`
  border-radius: 700px;
  width: 40%;
  max-width: 30%;
`;

export const CardsName = styled.h2`
  text-align: center;
`;
export const CardStatusContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const CardsStatus = styled.p``;
export const CardsStatusPoint = styled.div`
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

export const CardsOrigin = styled.p`
  font-size: 12px;
`;
