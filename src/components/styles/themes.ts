import { DefaultTheme } from "styled-components";

export type Themes = {
  [key: string]: DefaultTheme;
};

const theme: Themes = {
  dark: {
    id: "T_001",
    name: "dark",
    colors: {
      body: "#1a1a1a",
      scrollHandle: "#19252E",
      scrollHandleHover: "#162028",
      primary: "#973737",
      secondary: "#d7d7d7",
      caretColor: "#7f7f7f",
      text: {
        100: "#cbcbcb",
        200: "#7f7f7f",
        300: "#64748b",
      },
    },
  },
  light: {
    id: "T_002",
    name: "light",
    colors: {
      body: "#EFF3F3",
      scrollHandle: "#C1C1C1",
      scrollHandleHover: "#AAAAAA",
      primary: "#ff0000",
      secondary: "#000000",
      caretColor: "#475569",
      text: {
        100: "#334155",
        200: "#475569",
        300: "#64748b",
      },
    },
  }
};

export default theme;
