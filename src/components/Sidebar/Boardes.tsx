import React from "react";
import Board from "./Board";
import { Flex, Button, Icon, Text } from "@chakra-ui/react";
import { TbLayoutBoardSplit, TbPlus } from "react-icons/tb";
import { setView, setTitle, toggleOpen } from "@/redux/Futures/modalSlice";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

export default function Boardes({}: Props) {
  const boards = [
    {
      id: 1,
      title: "board1",
      description: "small description",
    },
    {
      id: 2,
      title: "board2",
      description: "small description",
    },
    {
      id: 3,
      title: "board3",
      description: "small description",
    },
  ];
  const dispatch = useDispatch();
  const handleToggleOpen = () => {
    dispatch(toggleOpen());
    dispatch(setView("addBoard"));
    dispatch(setTitle("Add Board "));
  };
  return (
    <Flex w="100%" pr="1rem">
      <Flex flexDir="column" gap="0.3rem" letterSpacing="1.5px" flexGrow={1}>
        <Text pl="1rem" color="gray.200" fontSize="12px">
          ALL BOARDS (4)
        </Text>
        <Flex flexDir="column" gap="0.5rem" py="1rem">
          {boards.map((board, i) => {
            return <Board key={i} board={board} />;
          })}
        </Flex>
        <Button
          bg="none"
          pl="1rem"
          _hover={{ bg: "accent-color" }}
          onClick={handleToggleOpen}
          display="flex"
          justifyContent="left"
        >
          <Flex>
            <Icon as={TbLayoutBoardSplit} color="gray.300" />
            <Flex alignItems="center" ml="2">
              <Icon as={TbPlus} color="#645fc6" />
              <Text color="#645fc6" fontSize="13px">
                Create New Board
              </Text>
            </Flex>
          </Flex>
        </Button>
      </Flex>
    </Flex>
  );
}
