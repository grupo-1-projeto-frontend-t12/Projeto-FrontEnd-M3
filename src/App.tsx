import AuthContext from "./context/AuthContext";
import { AppDiv } from "./styles/appCSS/AppCSS";
import Header from "./components/Header/header";
import SearchBar from "./components/SearchBar/searchBar";

function App() {
  return (
    <AuthContext>
      <AppDiv>
        <Header />
        <SearchBar/>
      </AppDiv>
    </AuthContext>
  );
}

export default App;