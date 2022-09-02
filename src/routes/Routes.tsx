import { Route, Routes, Navigate } from "react-router";
import ProtectedRoutes from "./ProtectedRoutes/protectedRoutes";
import CorpoClinico from "../pages/CorpoClinico/corpoClinico";
import Doctor from "../pages/Doctor/doctor";
<<<<<<< HEAD
import Exames from "../pages/Exames/exames";
import Home from "../pages/Home/home";
import Login from "../pages/Login/login";
=======
import Dashboard from "../pages/Dashboard/dashboard";
>>>>>>> 948869b690258148a783fd16144b1c5b24b9e391
import Register from "../pages/Register/Register";
import { AnimatePresence } from "framer-motion";
import Login from "../pages/Login/login";
import Home from "../pages/Home/home";

const AllRoutes = () => {
  return (
<<<<<<< HEAD
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/corpoclinico" element={<CorpoClinico />} />  
      <Route path="/corpoclinico/doctor:id" element={<Doctor />} />       
      <Route path="/register" element={<Register />} />
      <Route path="/exames" element={<Exames />} />
    </Routes>
=======
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
>>>>>>> 948869b690258148a783fd16144b1c5b24b9e391
  );
};

export default AllRoutes;