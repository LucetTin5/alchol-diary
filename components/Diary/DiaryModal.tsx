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
import { BiChevronRight } from "react-icons/bi";

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
        <ModalContent>
          <ModalHeader>
            <CloseButton onClick={onClose} position="absolute" right="10%" />
            <Heading pt="2" fontSize="md" textAlign="center">
              {diaryItem?.date}
            </Heading>
          </ModalHeader>
          <ModalBody>
            <Text pt="3" fontSize="lg" p={10} textAlign="center">
              {diaryItem?.alcholType}
            </Text>
            <Text pt="2" fontSize="sm" textAlign="center" mb={10}>
              {diaryItem?.thought}
            </Text>
            <Flex justify="flex-end" mb={3}>
              <Button size="xs" onClick={goToDetail}>
                자세히 보기 <BiChevronRight />
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
