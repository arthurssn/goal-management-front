import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <Login></Login>
      </AuthProvider>
    </>
  );
}

export default App;
