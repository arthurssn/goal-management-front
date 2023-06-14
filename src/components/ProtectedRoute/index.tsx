import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  isAllowed?: boolean;
  redirectPath?: string;
  children?: JSX.Element;
}

export default function ProtectedRoute({
  isAllowed = true,
  redirectPath = "/login",
  children,
}: ProtectedRouteProps) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} />;
  }

  return children ?? <Outlet />;
}
