import { Route, Routes, Navigate } from "react-router";
import Dashboard from "../pages/Dashboard/dashboard";
import Login from "../pages/Login/login";


const AllRoutes= () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/corpoclinico" element={<CorpoClinico />} /> */}
    </Routes>
  );
};

export default AllRoutes;
