import axiosInstance from "@/lib/axios";
import { getFromStorage } from "@/lib/storage";
import { DiaryItem } from "@/types/diary";
import { useQuery } from "@tanstack/react-query";

export default function useDiary(filter: "asc" | "desc" = "asc") {
  const token = getFromStorage("token");
  const queryFn = (): Promise<DiaryItem[]> =>
    axiosInstance
      .get(`/diary/filter/${filter}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  const { data, isLoading, error, refetch } = useQuery(["diary"], queryFn);
  return { data, isLoading, error, refetch };
}
