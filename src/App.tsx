import Login from "./pages/modalLogin/modalLogin";
import AllRoutes from "./routes/Routes";
import AuthContext from "./context/AuthContext";
import { AppDiv } from "./styles/appCSS/AppCSS";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

function App() {
  return (
      <AppDiv>
        {/* <AllRoutes /> */}
        <Login/>
        <Header />
        <Footer />
      </AppDiv>
  );
}

export default App;