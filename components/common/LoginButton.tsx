import { KAKAO_AUTH_URI } from "@/lib/kakao";
import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function LoginButton() {
  const router = useRouter();
  const handleLogin = () => {
    // location.href = KAKAO_AUTH_URI; // 카카오 로그인 페이지로 이동
    router.push("/diary");
  };
  return (
    <Box
      width="100%"
      position="absolute"
      bottom="10%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      color="#fff"
    >
      <Button
        borderRadius={12}
        variant="ghost"
        width="max-content"
        mb={3}
        onClick={handleLogin}
        _hover={{ backgroundColor: "transparent" }}
      >
        <Image
          src="/kakao_login_large_narrow.png"
          alt="카카오 로그인"
          height="100%"
          transform="scale(1.2)"
          _hover={{ opacity: 0.8 }}
        />
      </Button>
      <Flex direction="column" height="100%" color="#50565B">
        <Text fontSize="xs" textAlign="center">
          계정 등록 시 SpiritLog의{" "}
          <Link href="#" color="#8E959A" opacity="1">
            이용약관
          </Link>
          에 동의하며
        </Text>
        <Text fontSize="xs" textAlign="center">
          SpiritLog의{" "}
          <Link href="#" color="#8E959A" opacity="1">
            개인정보 처리방침
          </Link>
          을 읽은 것으로 간주합니다
        </Text>
      </Flex>
    </Box>
  );
}
