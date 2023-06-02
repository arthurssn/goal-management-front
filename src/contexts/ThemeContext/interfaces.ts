export interface Theme {
  name: "defaultTheme";
  colors: {
    red: string;
    white: string;
  };

  alertsColor: {
    warning: string;
  };
}

export interface ThemeContextData {
  toggleTheme(name: "defaultTheme" | null): void;
  theme: Theme;
}
