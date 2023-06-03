import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";

import { ThemeContextData } from "./interfaces";
import { IContextProvider } from "@/interfaces/IContextProvider";

import { defaultTheme } from "@/themes/defaultTheme";
import { Theme } from "@/interfaces/ITheme";

export const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData
);

export const CustomThemeProvider = ({ children }: IContextProvider) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  function toggleTheme(name: "defaultTheme") {
    if (!name || name == "defaultTheme") {
      setTheme(defaultTheme);
      return;
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
