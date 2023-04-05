import axiosInstance from "@/lib/axios";
import { getFromStorage } from "@/lib/storage";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogHeader,
  AlertDialogBody,
  Flex,
  Divider,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRef } from "react";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DeleteModal({ isOpen, onClose }: DeleteModalProps) {
  const router = useRouter();
  const { diaryId } = router.query;
  const deleteDiary = () => {
    const url = `/diary/${diaryId}`;
    axiosInstance
      .delete(url, {
        headers: {
          Authorization: `Bearer ${getFromStorage("token")}`,
        },
      })
      .then(() => {
        router.replace("/diary");
      });
  };
  const cancelRef = useRef(null);
  const cancelDelete = () => onClose();
  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
        size="xs"
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader
              textAlign="center"
              fontSize="md"
              fontWeight="bold"
            >
              삭제하시겠습니까?
            </AlertDialogHeader>
            <Divider />
            <AlertDialogBody color="gray.600">
              <Flex>
                <Button
                  onClick={deleteDiary}
                  width="100%"
                  bgColor="transparent"
                  fontSize="sm"
                >
                  삭제
                </Button>
                <Divider orientation="vertical" h="100%" m="0 10px" />
                <Button
                  ref={cancelRef}
                  onClick={cancelDelete}
                  width="100%"
                  bgColor="transparent"
                  fontSize="sm"
                >
                  취소
                </Button>
              </Flex>
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
