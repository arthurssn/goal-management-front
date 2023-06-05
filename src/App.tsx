import { AuthProvider } from "./contexts/AuthContext";
import { CustomThemeProvider } from "./contexts/ThemeContext";
import AppRoutes from "./routes";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <CustomThemeProvider>
        <GlobalStyle />
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </CustomThemeProvider>
    </>
  );
}

export default App;
