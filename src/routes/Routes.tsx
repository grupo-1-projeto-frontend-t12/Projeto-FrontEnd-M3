import { Route, Routes, Navigate } from "react-router";
import ProtectedRoutes from "./ProtectedRoutes/protectedRoutes";
import CorpoClinico from "../pages/CorpoClinico/corpoClinico";
import Doctor from "../pages/Doctor/doctor";
import Dashboard from "../pages/Dashboard/dashboard";
import Register from "../pages/Register/Register";
import { AnimatePresence } from "framer-motion";
import Login from "../pages/Login/login";
import Home from "../pages/Home/home";
import Exames from "../pages/Exames/exames";
import EditUser from "../pages/EditUser/editUser";

const AllRoutes = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/exames" element={<Exames />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/corpoclinico/doctor:id" element={<Doctor />} />
        <Route path="/corpoclinico" element={<CorpoClinico />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user/edit" element={<EditUser />} />
        <Route element={<ProtectedRoutes />}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AllRoutes;