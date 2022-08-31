import AuthProvider, { AuthContext } from "./context/AuthContext";

import { AppDiv } from "./styles/appCSS/AppCSS";
import { useContext } from "react";
import Header from "./components/Header/header";
import Register from "./pages/Register/Register";
import AllRoutes from "./routes/Routes";
import ModalRegister from "./components/ModalRegister/ModalRegister";
import Menu from "./components/menu/menu";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthProvider>
      <AppDiv>
        <AllRoutes />
        <ToastContainer />
      </AppDiv>
    </AuthProvider>
  );
}

export default App;
