import axiosInstance from "@/lib/axios";
import { getFromStorage, saveStorage } from "@/lib/storage";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function KakaoLogin() {
  const router = useRouter();
  const { code } = router.query;
  useEffect(() => {
    if (code) {
      const url = "/users/kakao/callback?code=" + code;
      axiosInstance.get(url).then((res) => {
        const { user, accessToken } = res.data;
        saveStorage("token", accessToken);
        saveStorage("user", user);
        if (getFromStorage("token")) {
          router.push("/diary");
        }
      });
    }
  }, [code, router]);
  return <></>;
}
