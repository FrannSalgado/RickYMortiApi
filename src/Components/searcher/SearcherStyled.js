import styled from "styled-components";

export const SearcherSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 90%;
`;

export const SearcherBar = styled.input`
  border-radius: 10px;
  height: 35px;
  width: min(500px, 80%);
  background-color: rgb(4 0 3 / 53%);
  color: white;
  color: rgb(25, 160, 184);
  padding-left: 25px;
  font-family: "Rock Salt", cursive;
  font-size: 17px;
  @media screen and (max-width: 470px) {
    ::placeholder {
      font-size: 15px;
    }
    padding-left: 15px;
  }
`;

export const HelpText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Rock Salt", cursive;
  color: rgb(25, 160, 184);
  font-size: 19px;
  font-weight: bold;
  text-shadow: black 2px 2px 4px, yellow 0px 0px 10px;
`;

export const MesseksAndSearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
`;
export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContainerRightDown = styled.div`
  display: flex;
  margin: 5px;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 1%;
  z-index: 10;
  right: 20px;
`;
