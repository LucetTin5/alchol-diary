import { AlcholType } from "@/types/alchol";

export const iconImageUrl = (alcholType: AlcholType) => {
  switch (alcholType) {
    case "소주":
      return "/icons/soju.png";
    case "맥주":
      return "/icons/beer.png";
    case "와인":
      return "/icons/wine.png";
    case "샴페인":
      return "/icons/champagne.png";
    case "막걸리":
      return "/icons/makgeolli.png";
    case "전통주":
      return "/icons/national.png";
    case "칵테일":
      return "/icons/cocktail.png";
    default:
      return "/icons/soju.png";
  }
};
