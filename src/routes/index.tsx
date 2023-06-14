import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import Home from "@/pages/Home";
import DashboardTemplate from "@/components/template/DashboardTemplate";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/hooks/useAuth";

const AppRoutes = () => {
  const { email, isInitialized } = useAuth();
  if (!isInitialized) return;

  const emailExists = email !== undefined;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={emailExists ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={emailExists ? <Navigate to="/" /> : <Register />}
        />
        <Route element={<DashboardTemplate />}>
          <Route element={<ProtectedRoute isAllowed={emailExists} />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
