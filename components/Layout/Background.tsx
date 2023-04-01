import { Box } from "@chakra-ui/react";

export default function Background({ color }: { color: string }) {
  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100%"
      bgColor={color}
      zIndex="-1"
    />
  );
}
