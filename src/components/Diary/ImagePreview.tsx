import { Box, IconButton, Image } from "@chakra-ui/react";
import { BiXCircle } from "react-icons/bi";

interface ImagePreviewProps {
  image: File;
  handleDelete: (image: File) => void;
}

export default function ImagePreview({
  image,
  handleDelete,
}: ImagePreviewProps) {
  return (
    <Box position="relative" width={70}>
      <IconButton
        position="absolute"
        right="-2"
        top="-2"
        borderRadius="lg"
        onClick={() => handleDelete(image)}
        bgColor="transparent"
        _hover={{ bgColor: "trasnparent", transform: "scale(1.1)" }}
        _active={{ bgColor: "trasnparent" }}
        aria-label="delete"
        icon={<BiXCircle />}
      />
      <Image
        src={URL.createObjectURL(image)}
        alt="preview"
        width="100%"
        height="100%"
        borderRadius="md"
      />
    </Box>
  );
}
