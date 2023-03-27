import React from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { TbLayoutBoardSplit } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { setBoardTitle } from "@/redux/Futures/board";
import { RootState } from "@/redux/store";
import { Board } from "@/types/Board";
type Props = {
  board: Board;
};

function Board({ board }: Props) {
  const { title } = useSelector((state: RootState) => state.board);
  const dispatch = useDispatch();
  const handleSelectBoard = () => {
    dispatch(setBoardTitle(board.title));
  };
  return (
    <Flex cursor="pointer" onClick={handleSelectBoard}>
      <Flex
        alignItems="center"
        bg={title === board.title ? "accent-color" : ""}
        flexGrow={1}
        py="0.8rem"
        borderRightRadius="13px"
        pl="1rem"
      >
        <Icon as={TbLayoutBoardSplit} color="creame-white" />
        <Text fontWeight={100} fontSize="12px" color="creame-white" ml="3">
          {board.title}
        </Text>
      </Flex>
    </Flex>
  );
}

export default Board;
