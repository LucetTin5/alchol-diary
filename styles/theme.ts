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
      100: "#4A0BCF",
      200: "#4A0BCF",
      300: "#4A0BCF",
      400: "#4A0BCF",
      500: "#4A0BCF",
      600: "#4A0BCF",
      700: "#4A0BCF",
      800: "#4A0BCF",
      900: "#4A0BCF",
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
