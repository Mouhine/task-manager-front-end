import { Input, Stack, Text, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";
type Props = {};

const Login = (props: Props) => {
  async function handleLoginWithGithub() {
    await signIn();
  }

  async function handleLogin() {}
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
        <Text fontSize="12px">Email</Text>
        <Input placeholder="email ...." fontWeight={300} fontSize="10pt" />
      </>
      <>
        <Text fontSize="12px">Password</Text>
        <Input placeholder="password ..." fontWeight={300} fontSize="10pt" />
      </>
      <Button
        bg="accent-color"
        color="creame-white"
        fontWeight={300}
        fontSize="10pt"
      >
        Login
      </Button>
    </Stack>
  );
};

export default Login;
