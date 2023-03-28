import { Theme, IObjectKeys } from "../type";

const light: Theme = {
  backgroundColor: "#fff",
  color: "#000",
  backdropColor: "rgba(0,0,0,0.3)",
  buttonTextColor: "rgba(0, 0, 0, 0.5)",
  hoverColor: "#000",
};

const dark: Theme = {
  backgroundColor: "#3A3B3C",
  color: "#fff",
  backdropColor: "rgba(36, 37, 38, 0.4)",
  buttonTextColor: "#b0b3b3",
  hoverColor: "#fff",
};

export const ThemeDict: IObjectKeys = {
  light: light,
  dark: dark,
};
