import { getBgColor } from "@/lib/bgColor";
import { DiaryItem } from "@/types/diary";
import {
  Button,
  CloseButton,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { transformDate } from "@/lib/date";
import { AlcholEng } from "@/lib/constants";
import { bgImageUrl } from "@/lib/bgImage";
import ModalBackground from "../common/ModalBackground";
import { AiOutlineArrowRight } from "react-icons/ai";

interface ItemModalProps {
  diaryItem?: DiaryItem;
  isOpen: boolean;
  onClose: () => void;
}

export default function ItemModal({
  isOpen,
  onClose,
  diaryItem,
}: ItemModalProps) {
  const router = useRouter();
  const goToDetail = () => {
    router.push(`/diary/${diaryItem?.id}`);
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size="xs"
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent height="md" color="#fff" pos="relative" borderRadius={20}>
          <ModalBackground
            startColor={
              diaryItem?.alcholType
                ? getBgColor(diaryItem?.alcholType)
                : getBgColor("소주")
            }
            endColor="rgba(0, 0, 0, 0.6)"
            imgUrl={
              diaryItem?.alcholType
                ? bgImageUrl(diaryItem?.alcholType)
                : bgImageUrl("소주")
            }
          />
          <ModalHeader>
            <CloseButton onClick={onClose} position="absolute" right="10%" />
            <Text pt="2" fontSize="md" textAlign="center">
              {diaryItem?.createdAt ? transformDate(diaryItem?.createdAt) : ""}
            </Text>
          </ModalHeader>
          <ModalBody>
            <Flex direction="column" p={10}>
              <Heading pt="3" fontSize="md" textAlign="center">
                {diaryItem?.alcholType}
              </Heading>
              <Heading
                pt="3"
                fontSize="2xl"
                textAlign="center"
                textTransform="capitalize"
                letterSpacing={1.5}
              >
                {AlcholEng[diaryItem?.alcholType || "소주"]}
              </Heading>
            </Flex>
            <Text pt="2" fontSize="sm" textAlign="left" mb={10}>
              {diaryItem?.thought}
            </Text>
            <Flex justify="flex-end" mb={3} pos="absolute" bottom="0" right="3">
              <Button
                size="sm"
                onClick={goToDetail}
                variant="ghost"
                _hover={{
                  bgColor: "transparent",
                  transform: "scale(1.1)",
                }}
              >
                자세히 보기 <AiOutlineArrowRight />
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
