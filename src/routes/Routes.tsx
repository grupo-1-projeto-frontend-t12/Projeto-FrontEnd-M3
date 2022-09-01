import { Route, Routes, Navigate } from "react-router";
import CorpoClinico from "../pages/CorpoClinico/corpoClinico";
import Doctor from "../pages/Doctor/doctor";
import Home from "../pages/Home/home";
import Login from "../pages/Login/login";
import Register from "../pages/Register/Register";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/corpoclinico" element={<CorpoClinico />} />  
      <Route path="/corpoclinico/doctor:id" element={<Doctor />} />       
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AllRoutes;