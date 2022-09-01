import { Route, Routes, Navigate } from "react-router";
<<<<<<< HEAD
import Dashboard from "../pages/Dashboard/dashboard";
=======
import CorpoClinico from "../pages/CorpoClinico/corpoClinico";
import Home from "../pages/Home/home";
>>>>>>> 63ad5f687f03b3250f6a6ebef925eee23048e068
import Login from "../pages/Login/login";
import Register from "../pages/Register/Register";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/corpoclinico" element={<CorpoClinico />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AllRoutes;