import { AlcholType } from "./alchol";

export interface DiaryItem {
  id: number;
  alcholType: AlcholType;
  amount: number | string;
  amountType: "잔" | "병" | "ml" | string;
  withWhom: "혼술" | "지인" | "애인" | "직장동료" | "가족";
  where: "집" | "식당" | "술집" | "야외" | "기타";
  why?: string;
  food?: string;
  thought?: string;
  uploadImages?: File[];
  images?: {
    id: number;
    url: string;
  }[];
  date: string;
}
