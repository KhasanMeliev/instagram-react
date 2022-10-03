import { Text } from "@mantine/core";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Chats, Header, Wrapper } from "./Search.style";

const Search = () => {
  return (
    <Wrapper>
      <Header>
        <BsArrowLeft />
        <Text>coding_khasan </Text>
        
      </Header>
      <Chats></Chats>
    </Wrapper>
  );
};

export default Search;
