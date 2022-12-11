import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import DashBoard from "../pages/DashBoard";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />

    <Route element={<ProtectedRoutes />}>
      <Route path="/dashboard" element={<DashBoard />} />
    </Route>
    
    <Route path="*" element={<Login />} />
  </Routes>
);
