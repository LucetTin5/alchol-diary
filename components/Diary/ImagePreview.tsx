import { Box, Button, Image } from "@chakra-ui/react";
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
    <Box position="relative" borderRadius="sm" width={35}>
      {/* Image preview with delete icon */}
      <Button onClick={() => handleDelete(image)}>
        <BiXCircle />
      </Button>
      <Image src={URL.createObjectURL(image)} alt="preview" />
    </Box>
  );
}
