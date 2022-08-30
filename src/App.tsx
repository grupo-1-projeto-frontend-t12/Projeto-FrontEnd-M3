
import AuthContext from "./context/authContext";
import { AppDiv } from "./styles/appCSS/appCSS";
import Header from "./components/header/header";

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