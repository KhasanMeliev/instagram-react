import React from "react";
import { Icons, Image, Logo, NavbarWrapper } from "./Navbar.style";
import { FaPlus, FaHeart } from "react-icons/fa";
import logo from "../../assets/img/logo.jpg";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Logo>
        <Image src={logo} />
      </Logo>
      <Icons>
        <FaPlus />
        <FaHeart />
        <FaHeart />
      </Icons>
    </NavbarWrapper>
  );
};

export default Navbar;
