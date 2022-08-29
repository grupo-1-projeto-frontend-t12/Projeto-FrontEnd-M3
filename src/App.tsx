
import AuthContext from "../src/context/AuthContext";
import { AppDiv } from "./styles/appCSS/AppCSS";
import Header from "./components/Header/header";

function App() {

  return (
   <AuthContext>
    <AppDiv>
    <Header/>
    </AppDiv>
   </AuthContext>
  );
}

export default App;