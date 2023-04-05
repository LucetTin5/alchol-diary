import { getBgColor } from "@/lib/bgColor";
import { alcholImageUrl } from "@/lib/iconImage";
import { DiaryItem } from "@/types/diary";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

interface ItemProps {
  diaryItem: DiaryItem;
  handleOpenModal: (diaryItem: DiaryItem) => void;
}

export default function Item({ diaryItem, handleOpenModal }: ItemProps) {
  const { alcholType, amount, amountType, withWhom, where, food, why } =
    diaryItem;
  const oneLineMsg = `${where}에서 ${withWhom}${
    withWhom !== "혼술" ? "과(와)" : ""
  }  ${amount} ${amountType}`;
  const bgColor = getBgColor(alcholType);
  return (
    <Card
      width="xs"
      borderRadius={12}
      boxShadow="md"
      cursor="pointer"
      bgColor={bgColor}
      color="#fff"
      onClick={() => handleOpenModal(diaryItem)}
    >
      <CardBody>
        <Flex>
          <Box mr="5">
            <Image
              src={alcholImageUrl(alcholType)}
              backgroundColor="tranparent"
              width={50}
              mr={5}
              alt={`${alcholType} icon image`}
            />
          </Box>
          <Flex direction="column">
            <Stack spacing="3">
              <Box>
                <Heading size="sm">{alcholType}</Heading>
                <Text pt="2" fontSize="sm">
                  {oneLineMsg}
                </Text>
              </Box>
              <Box>
                <Text pt="2" fontSize="sm">
                  {food ? `#${food}` : ""}
                </Text>
                <Text pt="2" fontSize="sm">
                  {why ? `#${why}` : ""}
                </Text>
              </Box>
            </Stack>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}
