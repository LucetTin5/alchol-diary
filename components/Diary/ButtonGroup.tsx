import { Alchols } from "@/lib/constants";
import { iconImageUrl } from "@/lib/iconImage";
import { DiaryItem } from "@/types/diary";
import {
  FormControl,
  FormLabel,
  Box,
  Button,
  Input,
  Image,
} from "@chakra-ui/react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

interface ButtonGroupProps {
  label: string;
  required?: boolean;
  name: keyof DiaryItem;
  register: UseFormRegister<DiaryItem>;
  gridOption: string;
  options: any[];
  setValue: UseFormSetValue<DiaryItem>;
  value?: string;
}

export default function ButtonGroup({
  label,
  required,
  name,
  register,
  gridOption,
  options,
  setValue,
  value,
}: ButtonGroupProps) {
  const handleClick = (optionValue: string) => {
    setValue(name, optionValue);
  };
  return (
    <FormControl>
      <FormLabel
        width="sm"
        m="0 auto"
        pl={5}
        py={2}
        fontSize="sm"
        fontWeight="bold"
      >
        {label} {required ? <span style={{ color: "red" }}>*</span> : null}
      </FormLabel>
      <Box
        width="sm"
        m="0 auto"
        display="grid"
        gridTemplateColumns={gridOption}
      >
        {options?.map((option) => {
          let imgSrc;
          if (Alchols.includes(option)) {
            imgSrc = iconImageUrl(option);
          }
          return (
            <Button
              key={option}
              variant={imgSrc ? "ghost" : "solid"}
              onClick={() => handleClick(option)}
              colorScheme={value === option ? "grape" : "gray"}
              size="sm"
              m={5}
              p={1}
              flexDir="column"
              color={
                !imgSrc && value === option
                  ? "#fff"
                  : imgSrc && value === option
                  ? "grape.start"
                  : "#888"
              }
            >
              {imgSrc && <Image src={imgSrc} alt="example" mb={1} />}
              {option}
            </Button>
          );
        })}
      </Box>
      <Input {...register(name)} hidden />
    </FormControl>
  );
}
