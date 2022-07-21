import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts";

// Page imports
import { WishlistPage } from "../pages";

const ProtectedRoutes = () => {
  const { authState } = useAuth();
  const { isAuthenticated } = authState;

  const location = useLocation();
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export { ProtectedRoutes };
