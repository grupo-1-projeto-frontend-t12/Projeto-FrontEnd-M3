import { Route, Routes, Navigate } from "react-router";
import ProtectedRoutes from "./ProtectedRoutes/protectedRoutes";
import CorpoClinico from "../pages/CorpoClinico/corpoClinico";
import Doctor from "../pages/Doctor/doctor";
import Dashboard from "../pages/Dashboard/dashboard";
import Register from "../pages/Register/Register";
import { AnimatePresence } from "framer-motion";
import Login from "../pages/Login/login";
import Home from "../pages/home/home";

const AllRoutes = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/corpoclinico" element={<CorpoClinico />} />  
          <Route path="/corpoclinico/doctor:id" element={<Doctor />} />       
        <Route element={<ProtectedRoutes />}>
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AllRoutes;