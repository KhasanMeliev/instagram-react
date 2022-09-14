import React from "react";
import { FooterWrapper } from "./Footer.style";
import { BsPlusSquare } from "react-icons/bs";
import { AiOutlineHome, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
const Footer = () => {
  return (
    
    <FooterWrapper>
      <AiOutlineHome />
      <AiOutlineSearch />
      <BsPlusSquare />
      <AiOutlineHeart />
      <BsPerson />
    </FooterWrapper>
  );
};

export default Footer;
