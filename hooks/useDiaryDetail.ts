import axiosInstance from "@/lib/axios";
import { getFromStorage } from "@/lib/windowChecker";
import { DiaryItem } from "@/types/diary";
import { useQuery } from "@tanstack/react-query";

export default function useDiaryDetail(diaryId: number) {
  const token = getFromStorage("token");
  const queryFn = (): Promise<DiaryItem> =>
    axiosInstance
      .get(`/diary/${diaryId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  const { data, isLoading, error, refetch } = useQuery(
    ["diary", diaryId],
    queryFn
  );
  return { data, isLoading, error, refetch };
}
