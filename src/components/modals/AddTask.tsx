import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import {
  Flex,
  Input,
  Text,
  Stack,
  Textarea,
  Button,
  Box,
  Icon,
  Select,
} from "@chakra-ui/react";
import { useAddTodoMutation } from "@/redux/api/TaskApi";
import { GrFormClose } from "react-icons/gr";
import { SubTask } from "@/types/Task";
type Props = {};

function AddTask({}: Props) {
  const [subTask, setSubTask] = useState<SubTask>({
    id: "",
    title: "",
    checked: false,
  });

  const [addTask, result] = useAddTodoMutation({
    fixedCacheKey: "shared-update-post",
  });

  const [subTasks, setSubtasks] = useState<SubTask[] | []>([]);
  const [taskInfo, setTaskInfo] = useState({
    title: "",
    description: "",
    status: "strign",
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { target } = event;
    const { name, value } = target;
    console.log(value);
    setTaskInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    console.log(taskInfo.title);
  };

  const handleAddSubTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubTask((prev) => ({
      id: uuid(),
      title: event.target?.value,
      checked: false,
    }));
  };

  const handelAddSubTask = () => {
    setSubtasks((prev) => {
      return [...prev, subTask];
    });

    setSubTask({
      id: "",
      title: "",
      checked: false,
    });
  };

  const handleDeleteSubTask = (id: string) => {
    setSubtasks((prev) => {
      return prev.filter((task) => task.id !== id);
    });
  };

  return (
    <Stack spacing={2}>
      <Flex>
        <Text>Add New Task</Text>
      </Flex>
      <>
        <Text fontSize="12px">Title</Text>
        <Input
          placeholder="title"
          name="title"
          fontWeight={300}
          fontSize="10pt"
          onChange={handleChange}
        />
      </>

      <>
        <Text fontSize="12px">Description</Text>
        <Textarea
          placeholder="add a small description"
          fontWeight={300}
          fontSize="10pt"
          name="description"
          onChange={handleChange}
        />
      </>

      <>
        <Text fontSize="12px">SubTasks</Text>
        <Stack>
          {subTasks.map((task, i) => {
            return (
              <SubTask
                subTask={task}
                key={i}
                handleDeleteSubTask={handleDeleteSubTask}
              />
            );
          })}
        </Stack>
        <Input
          placeholder="title ..."
          cursor="pointer"
          fontWeight={300}
          fontSize="10pt"
          value={subTask.title}
          onChange={(e) => handleAddSubTask(e)}
        />
        <Button
          bg="creame-white"
          color="accent-color"
          height="35px"
          fontWeight={300}
          fontSize="10pt"
          onClick={handelAddSubTask}
        >
          Add sub Task
        </Button>
      </>
      <>
        <Select
          placeholder="Select option"
          name="status"
          onChange={handleChange}
        >
          <option value="TODO">TODO</option>
          <option value="DOING">DOING</option>
          <option value="DONE">DONE</option>
        </Select>
      </>
      <Button
        bg="accent-color"
        color="creame-white"
        fontWeight={300}
        fontSize="10pt"
        onClick={() => addTask({ ...taskInfo, subTasks })}
      >
        create Tasks
      </Button>
    </Stack>
  );
}

export default AddTask;

const SubTask = ({
  subTask,
  handleDeleteSubTask,
}: {
  subTask: SubTask;
  handleDeleteSubTask: (id: string) => void;
}) => {
  return (
    <Flex alignItems="center">
      <Box p="0.5rem" border="0.3px solid gray" w="full" rounded={6} mr="1rem">
        {" "}
        {subTask.title}
      </Box>
      <Button onClick={() => handleDeleteSubTask(subTask.id!)}>
        <Icon as={GrFormClose} color="white" />
      </Button>
    </Flex>
  );
};
