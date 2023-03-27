import React from "react";
import Task from "./Task";
import { Flex, Box, Text } from "@chakra-ui/react";
import TaskType from "@/types/Task";
import { Droppable, Draggable } from "react-beautiful-dnd";

type Props = {
  id: number;
  title: string;
  accentColor: string;
  tasks: TaskType[];
};

function Colunm({ id, title, tasks, accentColor }: Props) {
  return (
    <Flex flexDir="column" gap="0.8rem" alignItems="start">
      <Flex alignItems="center" gap="0.5rem" py="0.5rem">
        <Box w="15px" h="15px" borderRadius="50%" bg={accentColor}></Box>
        <Text color="creame-white " fontSize="10px" letterSpacing={1.2}>
          {title} (4)
        </Text>
      </Flex>
      <Droppable droppableId={title}>
        {(droppableProvider, droppableSnapshot) => {
          return (
            <Flex
              minH="90vh"
              w="300px"
              flexDir="column"
              gap="0.6rem"
              ref={droppableProvider.innerRef}
              {...droppableProvider.droppableProps}
            >
              {tasks?.map((task, i) => {
                return <Task task={task} key={task.id} index={i} />;
              })}
            </Flex>
          );
        }}
      </Droppable>
    </Flex>
  );
}

export default Colunm;
