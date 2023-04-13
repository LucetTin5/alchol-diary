import { AlcholType } from "@/types/alchol";

export const bgImageUrl = (alcholType: AlcholType) => {
  switch (alcholType) {
    case "소주":
      return "/bgImages/soju.svg";
    case "맥주":
      return "/bgImages/beer.svg";
    case "와인":
      return "/bgImages/wine.svg";
    case "샴페인":
      return "/bgImages/champagne.svg";
    case "막걸리":
      return "/bgImages/makgeolli.svg";
    case "전통주":
      return "/bgImages/national.svg";
    case "칵테일":
      return "/bgImages/cocktail.svg";
    case "위스키":
      return "/bgImages/whiskey.svg";
    default:
      return "/bgImages/soju.svg";
  }
};
