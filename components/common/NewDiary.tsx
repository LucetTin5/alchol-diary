import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { AiOutlinePlus } from "react-icons/ai";

export default function NewDiaryButton() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/diary/new");
  };
  return (
    <Button
      bgGradient="linear(to-b, grape.start, grape.end)"
      position="absolute"
      variant="solid"
      borderRadius="50%"
      width="12"
      height="12"
      bottom="10%"
      right="10%"
      onClick={handleClick}
      _hover={{
        opacity: 0.8,
      }}
    >
      <AiOutlinePlus color="#fff" transform="scale(2)" />
    </Button>
  );
}
