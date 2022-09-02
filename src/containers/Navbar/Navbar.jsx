import React from "react";
import { Icons, Logo, NavbarWrapper } from "./Navbar.style";
import { FaPlus, FaHeart } from "react-icons/fa";
const Navbar = () => {
  return (
    <NavbarWrapper>
      <Logo>
        <p>Instagram</p>
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
