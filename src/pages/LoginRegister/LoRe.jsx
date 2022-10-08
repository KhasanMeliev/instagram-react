import React from "react";
import { Image, Wrapper } from "./LoRe.style";
import logo from "../../assets/img/logo.jpg";
import { Anchor, Button, Group } from "@mantine/core";
const LoRe = () => {
  return (
    <Wrapper>
      <Image src={logo} />
      <Group
        position="center"
        width="100%"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Anchor href="register">
          <Button>Create New Account</Button>
        </Anchor>
        <Anchor href="login">
          <Button variant="outline">Log In</Button>
        </Anchor>
      </Group>
    </Wrapper>
  );
};

export default LoRe;
