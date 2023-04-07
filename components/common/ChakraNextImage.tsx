import { Box } from "@chakra-ui/react";
import Image from "next/image";

interface CharkaNextImageProps {
  src: string;
  alt: string;
  [key: string]: any;
}

export default function CharkaNextImage(props: CharkaNextImageProps) {
  const { src, alt, ...rest } = props;
  return (
    <Box position="relative" {...rest}>
      <Image src={src} alt={alt} />
    </Box>
  );
}
