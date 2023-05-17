import styled from "styled-components";
import backgroundRyM from "../assets/background-RyM.jpg";

export const HomeCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  background-image: url(${backgroundRyM});
  background-repeat: no-repeat;
  background-size: cover;
  overflow-y: scroll;
  height: 100vh;
  width: 100vw;
  position: relative;
`;

export const Top = styled.div`
  display: block;
  height: 0%;
  width: 0%;
`;
