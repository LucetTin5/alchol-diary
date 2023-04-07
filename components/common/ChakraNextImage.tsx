import { Box } from "@chakra-ui/react";
import Image from "next/image";

interface CharkaNextImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  [key: string]: any;
}

export default function CharkaNextImage(props: CharkaNextImageProps) {
  const { src, alt, priority, ...rest } = props;
  return (
    <Box position="relative" {...rest}>
      <Image
        src={src}
        alt={alt}
        priority={priority}
        fill
        sizes="100%"
        style={{
          objectFit: "cover",
          borderRadius: "inherit",
        }}
      />
    </Box>
  );
}
