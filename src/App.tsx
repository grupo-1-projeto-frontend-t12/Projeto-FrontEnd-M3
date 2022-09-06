import { AppDiv } from "./styles/appCSS/AppCSS"
import AllRoutes from "./routes/Routes"
import AuthProvider from "./context/AuthContext";

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