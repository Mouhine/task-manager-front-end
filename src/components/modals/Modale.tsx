import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpen } from "@/redux/Futures/modalSlice";
import { RootState } from "@/redux/store";
import AddTask from "./AddTask";
import AddBoard from "./AddBoard";
import Login from "./Login";
import SignIn from "./SignIn";
import TaskInfo from "./TaskInfo";
type Props = {};

const Modale = (props: Props) => {
  const { open, view, title } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();
  const handleToggleOpen = () => {
    dispatch(toggleOpen());
  };
  return (
    <>
      <Modal isOpen={open} onClose={handleToggleOpen}>
        <ModalOverlay />
        <ModalContent bg="main-color-bg" color="white">
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {view === "addTask" && <AddTask />}
            {view === "addBoard" && <AddBoard />}
            {view === "login" && <Login />}
            {view === "signIn" && <SignIn />}
            {view === "Task" && <TaskInfo />}
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Modale;
