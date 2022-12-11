import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export const ProtectedRoutes = () => {
  const { userCurrent, loadingPage } = useContext(UserContext);

  if (loadingPage) {
    return null;
  }

  return userCurrent ? <Outlet/> : <Navigate to={"/"} />;
};
