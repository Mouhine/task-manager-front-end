import { RootState } from "@/redux/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useGetByIdQuery } from "@/redux/api/TaskApi";
import { Flex, Text, Stack, Select, Button } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { useUpdateTodoMutation } from "@/redux/api/TaskApi";
type Props = {};

function TaskInfo({}: Props) {
  const { id } = useSelector((state: RootState) => state.task);
  const [status, setStatus] = useState<string>("");
  const { data: Task, error, isLoading } = useGetByIdQuery(id);
  const [updateTask] = useUpdateTodoMutation();

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setStatus((prev) => e.target.value);
    console.log(status);
  }

  async function updateTaskStatus() {
    console.log({ ...Task!, status: status! });
    await updateTask({ ...Task!, status: status! });
  }

  return (
    <Stack>
      <Text fontSize="2rem">{Task?.title}</Text>
      <Text fontSize="10pt" color="GrayText">
        {Task?.description}
      </Text>
      <Flex flexDir="column">
        <Text fontSize="10pt">subtasks {Task?.subTasks.length}</Text>
        <CheckboxGroup>
          {Task?.subTasks?.map((task) => {
            return (
              <Checkbox
                defaultChecked
                key={task.title!}
                bg="main-dark-bg"
                my="0.2rem"
                p="0.6rem"
                borderRadius="3px"
                isChecked={task.checked}
              >
                <Text fontSize="10pt" color="GrayText">
                  {task.title}
                </Text>
              </Checkbox>
            );
          })}
        </CheckboxGroup>
      </Flex>

      <Flex>
        <Select
          placeholder="Select option"
          name="status"
          onChange={handleChange}
        >
          <option value="TODO">TODO</option>
          <option value="DOING">DOING</option>
          <option value="DONE">DONE</option>
        </Select>
      </Flex>
      <Button
        bg="accent-color"
        color="creame-white"
        fontWeight={300}
        fontSize="10pt"
        onClick={() => updateTaskStatus()}
      >
        update Task Statu
      </Button>
    </Stack>
  );
}

export default TaskInfo;
