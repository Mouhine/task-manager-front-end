import React from "react";
import { Flex, Text, Input, Stack, Textarea, Button } from "@chakra-ui/react";

type Props = {};

function AddBoard({}: Props) {
  return (
    <Stack>
      <>
        <Text fontSize="12px">Title</Text>
        <Input placeholder="title ..." fontWeight={300} fontSize="10pt" />
      </>
      <>
        <Text fontSize="12px">Description</Text>
        <Textarea
          placeholder="add a small description"
          fontWeight={300}
          fontSize="10pt"
        />
      </>

      <>
        <Text fontSize="12px">Date</Text>
        <Input
          placeholder="Select Date and Time"
          size="md"
          type="datetime-local"
          fontWeight={300}
          fontSize="10pt"
        />
      </>
      <Button
        bg="accent-color"
        color="creame-white"
        fontWeight={300}
        fontSize="10pt"
      >
        create Tasks
      </Button>
    </Stack>
  );
}

export default AddBoard;
