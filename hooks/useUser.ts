import { getFromStorage } from "@/lib/storage";

export default function useUser() {
  const user = getFromStorage("user");
  const userObject: {
    id: number;
    kakaoId: string;
    name: string;
    email: string;
  } = user && JSON.parse(user);

  return userObject;
}
