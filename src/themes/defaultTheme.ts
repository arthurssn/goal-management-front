import { Theme } from "@/interfaces/ITheme";

export const defaultTheme: Theme = {
  name: "defaultTheme",
  colors: {
    red: "#ff3f34",
    white: "#fff",
    green: "#00B300",
    orange: "#F6C90E",

    darkTextColor: "#333333",
    lightTextColor: "rgba(102, 102, 102, 0.75)",

    principalColor: "#ffffff",
    primaryColor: "#38B6FF",
    secondaryColor: "#cccccc",
  },

  textColors: {
    primaryColor: "#000000",
    secondaryColor: "#ffffff",
  },

  alertsColor: {
    warning: "rgba(255, 162, 0, 0.75)",
  },
};
