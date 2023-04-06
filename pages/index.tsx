import Container from "@/components/Layout/Container";
import LoginButton from "@/components/common/LoginButton";
import { Box, Heading, Image } from "@chakra-ui/react";
import Head from "next/head";
import styled from "@emotion/styled";

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
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Container backgroundColor="#000">
        <Image
          src="/landing.png"
          alt="SpiritLog Landing Image"
          sx={{
            maxHeight: "100vh",
            objectFit: "fill",
            margin: "0 auto",
          }}
        />
        <HeadingContainer>
          <Heading
            fontSize="5xl"
            as="h1"
            fontFamily="Righteous"
            letterSpacing={2}
            mb={2}
          >
            SpiritLog
          </Heading>
          <Heading fontSize="md" as="h2" fontFamily="Pretendard">
            술과 함께한 경험을 기록해보세요
          </Heading>
        </HeadingContainer>
        <Box />
        <LoginButton />
      </Container>
    </>
  );
}

const HeadingContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  z-index: 2;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
`;
