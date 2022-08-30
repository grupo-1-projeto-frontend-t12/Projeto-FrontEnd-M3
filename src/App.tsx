import Login from "./pages/modalLogin/modalLogin";
import AllRoutes from "./routes/Routes";
import AuthContext from "./context/AuthContext";
import { AppDiv } from "./styles/appCSS/AppCSS";

function App() {
  return (
    <AuthContext>
      <AppDiv>
        {/* <AllRoutes /> */}
        <Login/>
      </AppDiv>
    </AuthContext>
  );
}

export default App;
