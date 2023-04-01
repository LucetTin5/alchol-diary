import axiosInstance from "@/lib/axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function KakaoLogin() {
  const router = useRouter();
  const { code } = router.query;
  useEffect(() => {
    if (code) {
      const url = "http://localhost:3001/users/kakao/callback?code=" + code;
      axiosInstance.get(url).then((res) => {
        console.log(res);
      });
    }
  }, [code]);
  return <></>;
}
