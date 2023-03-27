import React, { useState } from "react";
import { Button, Flex, Input, Stack, Text } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { useCreateUserMutation } from "@/redux/api/userApi";
type Props = {};

const SignIn = (props: Props) => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [createUser] = useCreateUserMutation();

  async function handleLoginWithGithub() {
    await signIn();
  }

  async function createAccount() {
    try {
      await createUser(userInfo);
    } catch (error) {
      console.log("hello world");
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;
    setUserInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  return (
    <Stack>
      <Flex flexDir="column">
        <Button variant="outline" onClick={handleLoginWithGithub}>
          <FaGithub style={{ marginRight: "1rem" }} />
          Github
        </Button>
      </Flex>

      <Flex py="1rem" alignItems="center" justifyContent="center">
        <Text>OR</Text>
      </Flex>
      <>
        <Text fontSize="12px">First Name</Text>
        <Input
          name="firstName"
          placeholder="first name..."
          fontWeight={300}
          fontSize="10pt"
          onChange={handleChange}
          value={userInfo.firstName}
        />
      </>
      <>
        <Text fontSize="12px">Last Name</Text>
        <Input
          name="lastName"
          placeholder="last name ..."
          fontWeight={300}
          fontSize="10pt"
          onChange={handleChange}
          value={userInfo.lastName}
        />
      </>

      <>
        <Text fontSize="12px">Email</Text>
        <Input
          name="email"
          placeholder="email ...."
          fontWeight={300}
          fontSize="10pt"
          onChange={handleChange}
          value={userInfo.email}
        />
      </>
      <>
        <Text fontSize="12px">Password</Text>
        <Input
          name="password"
          placeholder="password ..."
          fontWeight={300}
          fontSize="10pt"
          onChange={handleChange}
          value={userInfo.password}
        />
      </>
      <Button
        bg="accent-color"
        color="creame-white"
        fontWeight={300}
        fontSize="10pt"
        onClick={createAccount}
      >
        create account
      </Button>
    </Stack>
  );
};

export default SignIn;
