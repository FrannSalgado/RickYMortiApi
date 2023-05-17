import styled from "styled-components";

export const NavContainer = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #353535e3;
  position: sticky;
  top: 0%;
`;

// https://occ-0-2705-993.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABekGfcjcxKQH35sJxlr2te1JNYCwXqpovwMvTf4gzZ1ihzzUY0M8YcEijgvL_ClD5aIMWEY-hKIZVmgthEVssV7SthGRm2xVXkuwzpphv6u0.png?r=a66

// https://media.cdn.adultswim.com/uploads/20220904/2294143541-RAMMobileHero.png

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
  top: 3%;
`;
export const PageIconTitle = styled.img`
  height: 60%;
  object-fit: cover;
  position: absolute;
  bottom: 0%;
  right: 9%;
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
