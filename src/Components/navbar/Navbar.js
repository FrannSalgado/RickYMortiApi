import React from "react";
import {
  IconContainer,
  NavContainer,
  NavLinks,
  NavLinksContainer,
  PageIcon,
  PageIconTitle,
} from "./navbarStyle";

const Navbar = () => {
  return (
    <NavContainer>
      <IconContainer>
        <PageIcon src="https://rickandmortyapi.com/icons/icon-512x512.png?v=1538abef51e33ef514e8fe1ab9aeab4e "></PageIcon>
        <PageIconTitle src="https://occ-0-2705-993.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABekGfcjcxKQH35sJxlr2te1JNYCwXqpovwMvTf4gzZ1ihzzUY0M8YcEijgvL_ClD5aIMWEY-hKIZVmgthEVssV7SthGRm2xVXkuwzpphv6u0.png?r=a66"></PageIconTitle>
      </IconContainer>
      <NavLinksContainer>
        <NavLinks>About</NavLinks>
        <NavLinks>Home</NavLinks>
      </NavLinksContainer>
    </NavContainer>
  );
};

export default Navbar;
