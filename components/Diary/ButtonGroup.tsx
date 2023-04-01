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
        {options?.map((option) => (
          <Button
            key={option}
            onClick={() => handleClick(option)}
            colorScheme={value === option ? "purple" : "gray"}
            variant="ghost"
            size="sm"
            m={5}
            p={1}
            flexDir="column"
          >
            <Image src="https://picsum.photos/50" alt="example" />
            {option}
          </Button>
        ))}
      </Box>
      <Input value={value} {...register(name)} hidden />
    </FormControl>
  );
}
