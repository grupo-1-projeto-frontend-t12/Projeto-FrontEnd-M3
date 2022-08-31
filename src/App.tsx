import { AppDiv } from "./styles/appCSS/AppCSS";
import AllRoutes from "./routes/Routes";
import Login from "./pages/modalLogin/modalLogin";
import AuthContext from "./context/AuthContext";
import Footer from "./components/Footer/footer";

function App() {
  return (
      <AppDiv>
        <AllRoutes />
      </AppDiv>
  );
}

export default App;