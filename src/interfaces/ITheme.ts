export interface Theme {
  name: "defaultTheme";
  colors: {
    red: string;
    white: string;

    darkTextColor: string;
    lightTextColor: string;

    principalColor: string;
    primaryColor: string;
    secondaryColor: string;
  };

  textColors: {
    primaryColor: string;
    secondaryColor: string;
  };

  alertsColor: {
    warning: string;
  };
}
