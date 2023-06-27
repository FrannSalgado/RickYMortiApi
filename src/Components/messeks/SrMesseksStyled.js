import styled from "styled-components";

export const MesseksContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-width: 350px;
  height: 10px;
  overflow: hidden;

  animation: scaleAnimation 3.5s forwards;
  @keyframes scaleAnimation {
    0% {
      height: 30px;
    }
    30% {
      height: 30px;
    }

    100% {
      height: 400px;
    }
  }
`;
export const MesseksGif = styled.img`
  position: absolute;
  bottom: 30px;
  left: 25%;
  right: 25%;
  width: 50%;
  z-index: 2;
  object-fit: scale-down;
`;
export const PortalGifContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  height: 100%;
`;
export const PortalGif = styled.img`
  position: absolute;
  top: -5px;
  overflow-y: visible;
  height: 35px;
  width: 80%;
  z-index: 3;

  animation: scaleAnimations 3.8s forwards;
  @keyframes scaleAnimations {
    0% {
      width: 0%;
    }

    25% {
      width: 100%;
    }

    70% {
      width: 100%;
    }
    85% {
      height: 30px;
    }

    100% {
      width: 0%;
      height: 10px;
    }
  }
`;

export const SpechBubble = styled.img`
  position: absolute;
  width: 60%;
  bottom: 63%;
  right: -3px;
  z-index: 15;
  animation: spawnBubble 3s;
  @keyframes spawnBubble {
    0% {
      opacity: 0;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
