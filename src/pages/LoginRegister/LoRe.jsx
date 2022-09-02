import React from "react";
import { Button, ButtonWrapper, Image, Wrapper } from "./LoRe.style";
import logo from "../../assets/img/logo.jpg";
const LoRe = () => {
  return (
    <Wrapper>
      <Image src={logo} />

      <ButtonWrapper>
        <Button>Create New Account</Button>
        <Button>Log In</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default LoRe;
