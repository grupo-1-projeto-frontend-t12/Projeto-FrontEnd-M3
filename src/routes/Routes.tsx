import { Route, Routes, Navigate } from "react-router";
import Home from "../pages/home/home";
import Login from "../pages/modalLogin/modalLogin";


const AllRoutes= () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/corpoclinico" element={<CorpoClinico />} /> */}
    </Routes>
  );
};

export default AllRoutes;
