import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Login} path="/login" />
        <Route Component={Register} path="/register" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
