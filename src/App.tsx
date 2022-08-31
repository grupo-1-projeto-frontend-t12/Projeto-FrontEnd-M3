import Login from "./pages/modalLogin/modalLogin";
import AllRoutes from "./routes/Routes";
import AuthContext from "./context/AuthContext";
import { AppDiv } from "./styles/appCSS/AppCSS";
import Footer from "./components/Footer/footer";

function App() {
  return (
      <AppDiv>
        <AllRoutes />
      </AppDiv>
  );
}

export default App;