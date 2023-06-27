import styled from "styled-components";

export const NotFoundCharacterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: clamp(400px, 100%, 500px);
  margin: 10px;
  width: clamp(200px, 100%, 900px);
  background-color: rgb(19 19 19 / 68%);
  border-radius: 20px;
  backdrop-filter: blur(10px);
`;
export const AngryRickGif = styled.img`
  object-fit: scale-down;
  width: 90%;
  height: 50%;
  margin: 2px;
`;

export const CharacterNotFoundText = styled.p`
  font-size: 20px;
  margin: 30px;
  color: white;

  @media screen and (max-width: 550px) {
    font-size: 17px;
    margin: 20px;
  }
`;
