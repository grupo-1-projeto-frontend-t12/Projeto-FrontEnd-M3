import { Route, Routes, Navigate } from "react-router";
import CorpoClinico from "../pages/CorpoClinico/corpoClinico";
import Dashboard from "../pages/Dashboard/dashboard";
import Home from "../pages/home/home";
import Login from "../pages/Login/login";
import Register from "../pages/Register/Register";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<Home />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/corpoclinico" element={<CorpoClinico />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AllRoutes;