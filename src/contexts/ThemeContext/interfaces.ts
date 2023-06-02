import { Theme } from "@/interfaces/ITheme";

export interface ThemeContextData {
  toggleTheme(name: "defaultTheme" | null): void;
  theme: Theme;
}
