import { Navigate, useLocation, Outlet } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const RequiredAuth = () => {
  console.log(useAuth);
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.userName ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
export default RequiredAuth;
