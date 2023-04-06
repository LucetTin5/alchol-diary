import Container from "@/components/Layout/Container";
import LoginButton from "@/components/common/LoginButton";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>스피릿로그</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="SpiritLog" />
        <meta
          property="og:description"
          content="술과 함께한 날의 생각을 기록하는 나만의 다이어리"
        />
        <meta property="og:image" content="/og/og.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container backgroundColor="#000">
        <Box />
        <LoginButton />
      </Container>
    </>
  );
}
