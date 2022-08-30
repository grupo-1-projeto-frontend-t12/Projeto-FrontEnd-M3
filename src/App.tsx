import AuthContext from "./context/AuthContext";
import { AppDiv } from "./styles/appCSS/AppCSS";
import Header from "./components/Header/header";
import Menu from "./components/menu/menu";

function App() {
  return (
    <AuthContext>
      <AppDiv>
        <Header />
        <Menu/>
      </AppDiv>
    </AuthContext>
  );
}

export default App;