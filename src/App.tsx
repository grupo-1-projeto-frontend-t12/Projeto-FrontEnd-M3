import AuthContext from "./context/authContext";
import { AppDiv } from "./styles/appCSS/appCSS";

import Login from "./pages/modalLogin/modalLogin";
import AllRoutes from "./routes/routes";

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
