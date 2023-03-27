import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import SideBar from "@/components/Sidebar/SideBar";
import Header from "@/components/Header/Header";
import Body from "@/components/Body/Body";
import Modale from "@/components/modals/Modale";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Modale />
        <Flex alignItems="start">
          <SideBar />
          <Flex w="100%" flexDir="column" position="relative">
            <Header />
            <Body />
          </Flex>
        </Flex>
      </main>
    </>
  );
}
