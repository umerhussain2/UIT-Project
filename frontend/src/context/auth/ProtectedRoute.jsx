import { Navigate } from "react-router-dom";
import { useAuth } from "../Context";

export const ProtectedRoute = ({ children }) => {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return children;
};
