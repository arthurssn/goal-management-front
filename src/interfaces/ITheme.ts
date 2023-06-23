export interface Theme {
  name: "defaultTheme";
  colors: {
    red: string;
    white: string;
    green: string;
    orange: string;

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
