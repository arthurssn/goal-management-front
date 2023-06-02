import { AuthProvider } from "./contexts/AuthContext";
import { CustomThemeProvider } from "./contexts/ThemeContext";
import Login from "./pages/Login";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <CustomThemeProvider>
        <GlobalStyle />
        <AuthProvider>
          <Login></Login>
        </AuthProvider>
      </CustomThemeProvider>
    </>
  );
}

export default App;
