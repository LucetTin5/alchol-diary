import Container from "@/components/Layout/Container";
import LoginButton from "@/components/common/LoginButton";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>스피릿로그</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container backgroundColor="#000">
        <Box />
        <LoginButton />
      </Container>
    </>
  );
}
