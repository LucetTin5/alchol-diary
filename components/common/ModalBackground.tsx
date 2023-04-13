import { Box } from "@chakra-ui/react";

interface ModalBackgroundProps {
  startColor: string;
  endColor: string;
  imgUrl: string;
}

export default function ModalBackground({
  startColor,
  endColor,
  imgUrl,
}: ModalBackgroundProps) {
  return (
    <Box
      pos="absolute"
      top={0}
      left={0}
      width="100%"
      height="100%"
      zIndex={-2}
      bgGradient={`linear(to-b, ${startColor} 23.7%, ${startColor}, ${endColor})`}
      borderRadius={20}
      _before={{
        content: '""',
        position: "absolute",
        bgImage: `url(${imgUrl})`,
        bgRepeat: "no-repeat",
        bgPosition: "center",
        bgSize: "fill",
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
}
