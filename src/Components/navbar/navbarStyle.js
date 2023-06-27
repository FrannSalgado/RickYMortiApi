import styled from "styled-components";

export const NavContainer = styled.nav`
  height: 80px;
  width: 100%;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #353535e3;
  position: sticky;
  top: 0%;
  z-index: 45;
`;

export const IconContainer = styled.div`
  width: 25%;
  max-width: 150px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const PageIcon = styled.img`
  height: 80%;
  object-fit: cover;
  position: absolute;
  left: 26px;
  top: 3%;
`;
export const PageIconTitle = styled.img`
  height: 60%;
  object-fit: cover;
  position: absolute;
  bottom: 0%;
  left: 10px;
`;
export const NavLinksContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  height: 50px;
`;

export const NavLinks = styled.a`
  text-decoration: none;
  font-family: "Rock Salt", cursive;
  color: #19a0b8;
  font-size: 19px;
  font-weight: bold;
  text-shadow: 2px 2px 4px black, 0 0 10px yellow;
  cursor: pointer;
`;
