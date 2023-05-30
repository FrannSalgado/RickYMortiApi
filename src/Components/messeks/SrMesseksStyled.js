import styled from "styled-components";

export const MesseksContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 300px;
  overflow: hidden;
  animation: scaleAnimation 3.5s forwards;
  @keyframes scaleAnimation {
    0% {
      height: 40px;
    }
    100% {
      height: 400px;
    }
  }
`;
export const MesseksGif = styled.img`
  /* position: absolute; */
  bottom: 10px;
  left: 25%;
  right: 25%;
  width: 50%;
  /* height: 50%; */
  z-index: 2;
  object-fit: scale-down;
`;
export const PortalGifContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  top: 0;
  height: 300px;
`;
export const PortalGif = styled.img`
  position: absolute;
  bottom: 0;
  height: 75px;
  width: 100%;
  z-index: 3;
  animation: scaleAnimations 2.8s forwards;
  @keyframes scaleAnimations {
    0% {
      top: 80%;
    }
    100% {
      top: -10%;
    }
  }
`;
