import StepOne from "@/components/Diary/NewDiaryStepOne";
import StepTwo from "@/components/Diary/NewDiaryStepTwo";
import Header from "@/components/Header/Header";
import Container from "@/components/Layout/Container";
import { Box, IconButton, Progress, ToastId, useToast } from "@chakra-ui/react";
import Head from "next/head";
import { useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { DiaryItem } from "@/types/diary";
import { withAuth } from "@/lib/withAuth";
import axiosInstance from "@/lib/axios";
import { getFromStorage } from "@/lib/storage";
import { useRouter } from "next/router";
import useUser from "@/hooks/useUser";
import { BiX } from "react-icons/bi";

function NewDiary() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const toast = useToast();
  const toastId = "is-dirty-toast";
  const toastRef = useRef<ToastId | null>(null);
  const close = () => {
    if (toastRef.current) {
      toast.close(toastRef.current);
    }
  };
  const methods = useForm<DiaryItem>({
    defaultValues: {
      alcholType: "소주",
      amount: 0,
      amountType: "잔",
      withWhom: "혼술",
      where: "집",
      date: String(new Date()).slice(4, 15),
    },
  });
  const { isDirty } = methods.formState;
  const user = useUser();
  const { handleSubmit } = methods;
  const handleNext = () => {
    if (!isDirty) {
      if (!toast.isActive(toastId)) {
        toastRef.current = toast({
          id: toastId,
          position: "bottom",
          status: "error",
          isClosable: true,
          render: () => (
            <Box
              color="white"
              p={3}
              bg="red.500"
              borderRadius={12}
              textAlign="center"
            >
              아무것도 입력하지 않았습니다
              <IconButton
                onClick={() => close()}
                aria-label="close"
                icon={<BiX />}
                bgColor="transparent"
                p={0}
                m={0}
                _hover={{ bgColor: "transparent" }}
              />
            </Box>
          ),
        });
      }
      return;
    } else {
      if (confirm("다음으로 진행하시겠습니까?")) {
        setStep(2);
      }
    }
  };
  const onSubmit = async (data: DiaryItem) => {
    const {
      alcholType,
      amount,
      amountType,
      withWhom,
      where,
      why,
      food,
      thought,
      uploadImages,
    } = data;
    let images;
    if (uploadImages) {
      const formData = new FormData();
      uploadImages.forEach((image) => {
        formData.append("images", image);
      });
      const {
        data,
      }: {
        data: {
          data: {
            images: {
              url: string;
            }[];
          };
        };
      } = await axiosInstance.post("/upload", formData, {
        headers: {
          Authorization: `Bearer ${getFromStorage("token")}`,
          Content_Type: "multipart/form-data",
        },
      });
      images = data.data.images;
    }
    const imagesUrl = images?.map((image) => image.url);
    const newDiaryResponse = await axiosInstance.post(
      "/diary",
      {
        alcholType,
        amount,
        amountType,
        withWhom,
        where,
        why,
        food,
        thought,
        imagesUrl: imagesUrl ?? [],
      },
      {
        headers: {
          Authorization: `Bearer ${getFromStorage("token")}`,
        },
      }
    );
    if (newDiaryResponse) {
      router.push("/diary");
    }
  };
  return (
    <>
      <Head>
        <title>{user?.name}의 스피릿로그</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="SpiritLog" />
        <meta
          property="og:description"
          content="술과 함께한 날의 생각을 기록하는 나만의 다이어리"
        />
        <meta property="og:image" content="/og/og.png" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Container>
        <Header />
        <Box width="sm" m="0 auto" mb={6}>
          <Progress
            value={step === 1 ? 50 : 100}
            borderRadius={50}
            size="sm"
            colorScheme="grape"
          />
        </Box>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {step === 1 && <StepOne handleNext={handleNext} />}
            {step === 2 && <StepTwo />}
          </form>
        </FormProvider>
      </Container>
    </>
  );
}

export default withAuth(NewDiary);
