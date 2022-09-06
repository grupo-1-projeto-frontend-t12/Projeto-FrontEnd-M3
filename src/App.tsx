import { AppDiv } from "./styles/appCSS/AppCSS";
import { useContext } from "react";
import AllRoutes from "./routes/Routes";
import AuthProvider from "./context/AuthContext";
import Loading from "./components/Loading/loading";

function App() {
  return (
    <AuthProvider>
      <AppDiv>
        <AllRoutes />
      </AppDiv>
    </AuthProvider>
  );
}

export default App;
