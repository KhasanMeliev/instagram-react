import React from "react";
import { Image, Wrapper } from "./LoRe.style";
import logo from "../../assets/img/logo.jpg";
import { Button, Group } from "@mantine/core";
const LoRe = () => {
  return (
    <Wrapper>
      <Image src={logo} />
      <Group position="center">
        <Button style={{ width: "80%" }}>Create New Account</Button>
        <Button variant="outline" style={{ width: "80%" }}>
          Log In
        </Button>
      </Group>
    </Wrapper>
  );
};

export default LoRe;
