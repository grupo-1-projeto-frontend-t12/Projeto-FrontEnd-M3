import TagHeader from "./components/Header/header";
import AuthContext from "../src/context/AuthContext";
import { AppDiv } from "./styles/appCSS/AppCSS";

function App() {

  return (
   <AuthContext>
    <AppDiv>
    <TagHeader/>
    </AppDiv>
   </AuthContext>
  );
}

export default App;