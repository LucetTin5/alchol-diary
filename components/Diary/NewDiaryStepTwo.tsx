import { DiaryItem } from "@/types/diary";
import {
  Box,
  Button,
  Flex,
  FormHelperText,
  Grid,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { BiPlus } from "react-icons/bi";
import FormGroup from "./FormGroup";
import ImagePreview from "./ImagePreview";

export default function StepTwo() {
  const [images, setImages] = useState<File[]>([]);
  const { register, watch, setValue } = useFormContext<DiaryItem>();
  const inputRef = useRef<HTMLInputElement>(null);
  const why = watch("why");
  const food = watch("food");
  const thought = watch("thought");
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (images.length >= 3) {
      alert("최대 3장까지 업로드 가능합니다.");
      return;
    }
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImages((prev) => [...prev, file]);
        setValue("uploadImages", [...images, file]);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleImageDelete = (image: File) => {
    setImages((prev) => prev.filter((img) => img !== image));
  };
  return (
    <>
      <Box>
        <VStack spacing={4}>
          <FormGroup label="왜 마셨나요?" required={false}>
            <Input
              {...register("why", {
                maxLength: 13,
              })}
              maxLength={13}
              placeholder="텍스트를 입력해주세요"
            />
            <FormHelperText textAlign="right" fontSize="xs">
              {why?.length ?? 0}/13
            </FormHelperText>
          </FormGroup>
          <FormGroup label="곁들인 안주가 있었나요?" required={false}>
            <Input
              {...register("food", {
                maxLength: 13,
              })}
              maxLength={13}
              placeholder="텍스트를 입력해주세요"
            />
            <FormHelperText textAlign="right" fontSize="xs">
              {food?.length ?? 0}/13
            </FormHelperText>
          </FormGroup>
          <FormGroup label="오늘의 생각을 기록해보세요." required={false}>
            <Textarea
              {...register("thought", {
                maxLength: 300,
              })}
              maxLength={300}
              placeholder="텍스트를 입력해주세요"
              height="150"
            />
            <FormHelperText textAlign="right" fontSize="xs">
              {thought?.length ?? 0}/300
            </FormHelperText>
          </FormGroup>
          <Grid gridTemplateColumns="repeat(4, 1fr)" width="xs">
            <Input
              type="file"
              onChange={handleImageUpload}
              accept="image/*"
              display="none"
              ref={inputRef}
            />
            <Button
              w={70}
              h={70}
              border="1px solid"
              borderColor="gray.300"
              borderRadius="md"
              onClick={() => inputRef.current?.click()}
            >
              <BiPlus />
            </Button>
            {images.map((image) => (
              <ImagePreview
                key={URL.createObjectURL(image)}
                image={image}
                handleDelete={handleImageDelete}
              />
            ))}
          </Grid>
          <Button
            type="submit"
            colorScheme="purple"
            width="sm"
            bgGradient="linear(to-r, grape.start, grape.end)"
          >
            업로드하기
          </Button>
        </VStack>
      </Box>
    </>
  );
}
