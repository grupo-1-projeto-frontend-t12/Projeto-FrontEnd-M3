import { Route, Routes, Navigate } from "react-router";
import Login from "../pages/modalLogin/modalLogin";


const AllRoutes= () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/register" element={<Register />} /> */}
    </Routes>
  );
};

export default AllRoutes;
