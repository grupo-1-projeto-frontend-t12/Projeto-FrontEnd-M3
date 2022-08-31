import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Register from "../pages/Register/Register";
import AuthContext from "../context/AuthContext";




function AllRoutes() {
    // const {users, setUsers, onSubmitLogin, navigate, onSubmitRegister } = useContext(allContext) 
  
  
    return (
      <Routes>
        <Route path="/register" element={ <Register /> } />
        <Route path="*" element={ <Navigate replace to="/menu"/> } />
      </Routes>
    );
  }
  
  export default AllRoutes;