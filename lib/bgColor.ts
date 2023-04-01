import { AlcholType } from "@/types/alchol";

export const getBgColor = (alcholType: AlcholType) => {
  switch (alcholType) {
    case "소주":
      return "soju.base";
    case "막걸리":
      return "makgeolli.base";
    case "칵테일":
      return "cocktail.base";
    case "위스키":
      return "whiskey.base";
    case "맥주":
      return "beer.base";
    case "샴페인":
      return "champagne.base";
    case "와인":
      return "wine.base";
    case "전통주":
      return "national.base";
    default:
      return "grape.start";
  }
};
