import Head from "next/head";
import { DiaryItem } from "@/types/diary";
import Header from "@/components/Header/Header";
import Container from "@/components/Layout/Container";
import Item from "@/components/Diary/Item";
import Modal from "@/components/Diary/DiaryModal";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import NewDiaryButton from "@/components/common/NewDiary";
import useDiary from "@/hooks/useDiary";
import { withAuth } from "@/lib/withAuth";

function Diary() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const { data: diaries, isLoading, refetch } = useDiary(order);
  const [currentDiaryItem, setCurrentDiaryItem] = useState<DiaryItem>();
  const handleOpenModal = (diaryItem: DiaryItem) => {
    setCurrentDiaryItem(diaryItem);
    onOpen();
  };
  useEffect(() => {
    refetch();
  }, [order, refetch]);
  return (
    <>
      <Head>
        <title>{}의 스피릿로그</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header />
        <Flex justify="flex-end" pr="15%">
          <Menu isLazy>
            <MenuButton
              as={Button}
              fontSize="xs"
              bgColor="transparent"
              _hover={{
                backgroundColor: "transparent",
              }}
              mb={2}
              width="max-content"
            >
              <Flex>
                {order === "asc" ? "최신순" : "오래된 순"} <BiChevronDown />
              </Flex>
            </MenuButton>
            <MenuList fontSize="xs" minW={0} width="max-content">
              <MenuItem onClick={() => setOrder("asc")}>최신순</MenuItem>
              <MenuItem onClick={() => setOrder("desc")}>오래된 순</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        {isLoading ? (
          <Flex align="center" justify="center">
            <Spinner />
          </Flex>
        ) : (
          <Flex align="center" rowGap={2} direction="column">
            {diaries?.map((diaryItem) => (
              <Item
                key={diaryItem.id}
                diaryItem={diaryItem}
                handleOpenModal={handleOpenModal}
              />
            ))}
          </Flex>
        )}
        <Modal diaryItem={currentDiaryItem} isOpen={isOpen} onClose={onClose} />
        <NewDiaryButton />
      </Container>
    </>
  );
}

export default withAuth(Diary);
