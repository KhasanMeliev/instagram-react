import React from "react";
import { Image, Logo, NavbarWrapper } from "./Navbar.style";
import logo from "../../assets/img/logo.jpg";
import { FiSend } from "react-icons/fi";
const Navbar = () => {
  return (
    <NavbarWrapper>
      <Logo>
        <Image src={logo} />
        <FiSend />
      </Logo>
    </NavbarWrapper>
  );
};

export default Navbar;
