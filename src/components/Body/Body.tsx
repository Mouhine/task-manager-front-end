import React from "react";
import { Flex } from "@chakra-ui/react";
import Colunms from "./Colunms";
type Props = {};

function Body({}: Props) {
  return (
    <Flex
      flexGrow={1}
      minH="90vh"
      bg="main-dark-bg"
      p="1rem"
      borderLeft="1px solid #8a8c9b"
    >
      <Colunms />
    </Flex>
  );
}

export default Body;
