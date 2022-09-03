import React from "react";
import { Box, Image, Logo, Message, NavbarWrapper } from "./Navbar.style";
import logo from "../../assets/img/logo.jpg";
import { FiSend } from "react-icons/fi";
const Navbar = () => {
  return (
    <NavbarWrapper>
      <Logo>
        <Image src={logo} />
        <Message>
          <FiSend />
          <Box>9</Box>
        </Message>
      </Logo>
    </NavbarWrapper>
  );
};

export default Navbar;
