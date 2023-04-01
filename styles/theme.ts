import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const themeConfig: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({
  config: themeConfig,
  fonts: {
    heading:
      "righteous -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    body: "Pretendard -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  },
  colors: {
    background: {
      primary: "#F2F2F2",
    },
    grape: {
      start: "#4A0BCF",
      end: "#770ECA",
    },
    soju: {
      base: "#25792A",
    },
    makgeolli: {
      base: "#C79E8C",
    },
    cocktail: {
      base: "#03C388",
    },
    beer: {
      base: "#E89432",
    },
    champagne: {
      base: "#DE8989",
    },
    wine: {
      base: "#A3392B",
    },
    national: {
      base: "#7661AE",
    },
  },
});

export default theme;
