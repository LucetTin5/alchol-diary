import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { Alchols, withWhomArray, whereArray } from "@/lib/constants";
import ButtonGroup from "./ButtonGroup";
import { DiaryItem } from "@/types/diary";
import { useEffect, useState } from "react";

interface StepOneProps {
  handleNext: () => void;
}

export default function StepOne({ handleNext }: StepOneProps) {
  const { register, setValue, watch } = useFormContext<DiaryItem>();
  const [isCustomAmount, setIsCustomAmount] = useState(false);
  const [isCustomAmountType, setIsCustomAmountType] = useState(false);
  const alcholType = watch("alcholType");
  const withWhom = watch("withWhom");
  const where = watch("where");
  const amount = watch("amount");
  const amountType = watch("amountType");

  useEffect(() => {
    if (amount === "직접 입력") {
      setIsCustomAmount(true);
    }
  }, [amount]);
  useEffect(() => {
    if (amountType === "직접 입력") {
      setIsCustomAmountType(true);
    }
  }, [amountType]);

  return (
    <Box>
      <VStack spacing={4}>
        <ButtonGroup
          label="어떤 술을 마셨나요?"
          required={true}
          name="alcholType"
          register={register}
          setValue={setValue}
          options={Alchols}
          gridOption="repeat(4, 1fr)"
          value={alcholType}
        />
        <Flex width="sm">
          <FormControl>
            <FormLabel
              width="sm"
              m="0 auto"
              pl={5}
              py={2}
              fontSize="sm"
              fontWeight="bold"
            >
              얼마나 마셨나요? <span style={{ color: "red" }}>*</span>
            </FormLabel>
            <Box
              width="sm"
              m="0 auto"
              display="flex"
              ml={3}
              justifyContent={
                isCustomAmount || isCustomAmountType
                  ? "space-between"
                  : "flex-start"
              }
            >
              {!isCustomAmount ? (
                <Select
                  {...register("amount")}
                  width="20%"
                  bgColor="grape.start"
                  color="#fff"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "직접 입력"].map(
                    (option) => (
                      <option
                        key={option}
                        value={option}
                        style={{ color: "#000" }}
                      >
                        {option}
                      </option>
                    )
                  )}
                </Select>
              ) : (
                <Input {...register("amount")} width="40%" />
              )}
              {!isCustomAmountType ? (
                <Select
                  {...register("amountType")}
                  width="20%"
                  bgColor="grape.start"
                  color="#fff"
                >
                  {["잔", "병", "ml", "직접 입력"].map((option) => (
                    <option
                      key={option}
                      value={option}
                      style={{ color: "#000" }}
                    >
                      {option}
                    </option>
                  ))}
                </Select>
              ) : (
                <Input {...register("amountType")} width="40%" />
              )}
            </Box>
          </FormControl>
        </Flex>
        <ButtonGroup
          label="누구와 함께 마셨나요?"
          required={true}
          name="withWhom"
          register={register}
          setValue={setValue}
          options={withWhomArray}
          gridOption="repeat(5, 1fr)"
          value={withWhom}
        />
        <ButtonGroup
          label="어디서 마셨나요?"
          required={true}
          name="where"
          register={register}
          setValue={setValue}
          options={whereArray}
          gridOption="repeat(5, 1fr)"
          value={where}
        />
        <Button
          onClick={handleNext}
          width="sm"
          bgGradient="linear(to-r, grape.start, grape.end)"
          color="#fff"
          _hover={{
            bgGradient: "linear(to-r, grape.start, grape.end)",
            opacity: 0.8,
          }}
        >
          다음
        </Button>
      </VStack>
    </Box>
  );
}
