import styled from "styled-components";

export const ButtonNextPortal = styled.button`
  position: relative;
  width: 100px;
  border: none;
  height: 100px;
  background-color: transparent;
  color: white;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    background-image: url(https://i.pinimg.com/originals/98/29/21/9829215db6f9210c0ae4e318e854cb1f.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    animation: spin 25s linear infinite;
  }
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-decoration: underline 3px;
    font-family: "Rock Salt", cursive;
    color: #19a0b8;
    font-size: 19px;
    font-weight: bold;
    text-shadow: 2px 2px 4px black, 0 0 10px yellow;
    cursor: pointer;
  }
  :hover {
    span {
      color: red;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export const ButtonNextPortalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
  margin-bottom: 10px;
`;
