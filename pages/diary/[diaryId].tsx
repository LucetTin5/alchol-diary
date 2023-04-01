import DeleteModal from "@/components/Diary/DeleteModal";
import ImageSlider from "@/components/Diary/Slider";
import Header from "@/components/Header/Header";
import Container from "@/components/Layout/Container";
import { withAuth } from "@/lib/withAuth";
import { DiaryItem } from "@/types/diary";
import {
  Box,
  Card,
  Flex,
  Heading,
  IconButton,
  Image,
  Spinner,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { BiTrash } from "react-icons/bi";
import useDiaryDetail from "@/hooks/useDiaryDetail";

function DiaryDetail() {
  const router = useRouter();
  const { diaryId } = router.query;
  const { data, isLoading } = useDiaryDetail(Number(diaryId));
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Head>
        <title>username의 스피릿로그</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header />
        <VStack spacing={4}>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <Flex
                justify="center"
                width="sm"
                m="0 auto"
                align="center"
                position="relative"
              >
                <Heading size="sm">{data?.date?.split(" ").join(".")}</Heading>
                <IconButton
                  aria-label="delete"
                  position="absolute"
                  right="10%"
                  icon={<BiTrash />}
                  cursor="pointer"
                  bgColor="transparent"
                  _hover={{ bgColor: "trasnparent", transform: "scale(1.1)" }}
                  onClick={() => onOpen()}
                />
              </Flex>
              <Card width="xs" m="0 auto" px={4} py={2}>
                <Flex>
                  <Image
                    src="https://picsum.photos/50"
                    p={4}
                    alt="alchol"
                    loading="lazy"
                  />
                  <Flex direction="column" ml={3}>
                    <Text fontSize="md" fontWeight="bold">
                      {data?.alcholType}
                    </Text>
                    <Text
                      fontSize="sm"
                      fontWeight="bold"
                    >{`${data?.where}에서 ${data?.withWhom}과(와) ${data?.amount}${data?.amountType}`}</Text>
                    <Box h={5} />
                    <Text fontSize="sm">
                      {data?.food ? `#${data?.food}` : ""}
                    </Text>
                    <Text fontSize="sm">
                      {data?.why ? `#${data?.why}` : ""}
                    </Text>
                  </Flex>
                </Flex>
              </Card>
              <Box width="xs" m="0 auto">
                <Text fontSize="sm">{data?.thought}</Text>
              </Box>
              <Box>
                <ImageSlider images={data?.images} />
              </Box>
            </>
          )}
          <DeleteModal isOpen={isOpen} onClose={onClose} />
        </VStack>
      </Container>
    </>
  );
}

export default withAuth(DiaryDetail);