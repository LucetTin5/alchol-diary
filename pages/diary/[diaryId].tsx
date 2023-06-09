import DeleteModal from "@/components/Diary/DeleteModal";
import ImageSlider from "@/components/Diary/Slider";
import Header from "@/components/Header/Header";
import Container from "@/components/Layout/Container";
import { withAuth } from "@/lib/withAuth";
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
import { getBgColor } from "@/lib/bgColor";
import { transformDate } from "@/lib/date";
import { iconImageUrl } from "@/lib/iconImage";
import useUser from "@/hooks/useUser";

function DiaryDetail() {
  const router = useRouter();
  const user = useUser();
  const { diaryId } = router.query;
  const { data, isLoading } = useDiaryDetail(Number(diaryId));
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Head>
        <title>{user?.name}의 스피릿로그</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="SpiritLog" />
        <meta
          property="og:description"
          content="술과 함께한 날의 생각을 기록하는 나만의 다이어리"
        />
        <meta property="og:image" content="/og/og.png" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Container
        backgroundColor={
          data?.alcholType ? getBgColor(data?.alcholType) : "soju.base"
        }
      >
        <Header
          bgColor={
            data?.alcholType ? getBgColor(data?.alcholType) : "soju.base"
          }
        />
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
                color="#fff"
              >
                <Heading size="md">
                  {data?.createdAt ? transformDate(data?.createdAt) : ""}
                </Heading>
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
                    src={data?.alcholType ? iconImageUrl(data?.alcholType) : ""}
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
              <Box width="xs" m="0 auto" px={3}>
                <Text fontSize="sm" color="#fff">
                  {data?.thought}
                </Text>
              </Box>
              <Box width="sm" m="0 auto">
                <ImageSlider images={data?.images ?? []} />
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
