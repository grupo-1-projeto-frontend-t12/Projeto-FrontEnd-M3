import { Navigate, Outlet, useLocation } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import Loading from "../../components/Loading/loading";

const ProtectedRoutes = () => {
  const { loading } = useContext(AuthContext);
  const location = useLocation();
  const token = localStorage.getItem("@context-KenzieMed:token")

  if (loading) {
    return <Loading />
  }

  return token ? ( <Outlet/> 
  ) : (
  <Navigate to="/login" replace state={{from: location}}/>);
}; 

export default ProtectedRoutes;