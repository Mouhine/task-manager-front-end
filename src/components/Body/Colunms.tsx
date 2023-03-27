import React, { useState, useEffect } from "react";
// import Colunm from "./Colunm";
import { Flex } from "@chakra-ui/react";
import { DragDropContext, OnDragEndResponder } from "react-beautiful-dnd";
import dynamic from "next/dynamic";
import Task from "@/types/Task";
import { useGetAllQuery, useUpdateTodoMutation } from "@/redux/api/TaskApi";
const Colunm = dynamic(() => import("./Colunm"), { ssr: false });
type Props = {};
interface ColumnType {
  id: number;
  title: string;
  accentColor: string;
  tasks: Task[] | undefined;
}
function Colunms({}: Props) {
  const { data: Tasks, error, isLoading } = useGetAllQuery();
  const [updateTask] = useUpdateTodoMutation();
  console.log(Tasks, isLoading, error);

  const columns = [
    {
      id: 0,
      title: "TODO",
      accentColor: "green.300",
      tasks: Tasks?.filter((task) => task.status === "TODO"),
    },
    {
      id: 1,
      title: "DOING",
      accentColor: "purple.400",
      tasks: Tasks?.filter((task) => task.status === "DOING"),
    },
    {
      id: 2,
      title: "DONE",
      accentColor: "green.400",
      tasks: Tasks?.filter((task) => task.status === "DONE"),
    },
  ];

  const [columnsState, setColomns] = useState(columns);

  const reorderColumnList = (
    sourceCol: ColumnType,
    startIndex: number,
    endIndex: number
  ) => {
    console.log(startIndex, endIndex);

    setColomns((prev) => {
      return prev.map((col, i) => {
        if (col.title === sourceCol.title) {
          const [item] = col.tasks!.splice(startIndex, 1);
          col.tasks!.splice(endIndex, 0, item);
          return col;
        }
        return col;
      });
    });
  };

  const onDragEnd: OnDragEndResponder = async (result) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId == source.droppableId &&
      destination.index == source.index
    ) {
      return;
    }

    const sourceCol = columns.find((col) => col.title === source.droppableId);
    const destinationCol = columns.find(
      (col) => col.title === destination.droppableId
    );

    if (sourceCol?.title === destinationCol?.title) {
      reorderColumnList(sourceCol!, source.index, destination.index);
      return;
    }

    const [MovingTask] = sourceCol?.tasks!.splice(source.index, 1)!;
    console.log(MovingTask);
    //update the task
    await updateTask({ ...MovingTask, status: destinationCol?.title! });
    // MovingTask.status = destinationCol?.title!;
    destinationCol?.tasks!.splice(destination.index, 0, MovingTask);
    console.log(destinationCol?.tasks);
  };

  return (
    !isLoading && (
      <DragDropContext onDragEnd={onDragEnd}>
        <Flex h="100%" gap="2rem">
          {columns.map((column, i) => {
            return (
              <Colunm
                title={column.title}
                accentColor={column.accentColor}
                tasks={column?.tasks!}
                id={column.id}
                key={i}
              />
            );
          })}
        </Flex>
      </DragDropContext>
    )
  );
}

export default Colunms;
