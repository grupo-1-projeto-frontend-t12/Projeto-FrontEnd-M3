import { Navigate, Outlet, useLocation } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const ProtectedRoutes = () => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div>Carregando ...</div>;
  }

  return user ? ( <Outlet/> 
  ) : (
  <Navigate to="/login" replace state={{from: location}}/>);
}; 

export default ProtectedRoutes;