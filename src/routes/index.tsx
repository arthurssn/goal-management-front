import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

import DashboardTemplate from "@/components/template/DashboardTemplate";
import ProtectedRoute from "@/components/ProtectedRoute";

import { useAuth } from "@/hooks/useAuth";

const Login = lazy(() => import("@/pages/Auth/Login"));
const Register = lazy(() => import("@/pages/Auth/Register"));
const Home = lazy(() => import("@/pages/Home"));
const CreateGoal = lazy(() => import("@/pages/Goals/CreateGoal"));

const AppRoutes = (): JSX.Element | null => {
  const { email, isInitialized } = useAuth();
  if (!isInitialized) return null;

  const emailExists = email !== undefined;
  return (
    <BrowserRouter>
      <Suspense>
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
              <Route path="/goals/create" element={<CreateGoal />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
