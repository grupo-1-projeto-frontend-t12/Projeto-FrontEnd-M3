import { Route, Routes, Navigate } from "react-router";
import ProtectedRoutes from "./ProtectedRoutes/protectedRoutes";
import CorpoClinico from "../pages/CorpoClinico/corpoClinico";
import Dashboard from "../pages/Dashboard/dashboard";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/login";
import Home from "../pages/home/home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/corpoclinico" element={<CorpoClinico />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
