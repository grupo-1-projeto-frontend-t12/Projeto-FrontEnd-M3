import AuthContext from "./context/AuthContext";
import { AppDiv } from "./styles/appCSS/AppCSS";
import Header from "./components/Header/header";
import SearchBar from "./components/SearchBar/searchBar";
import Footer from "./components/Footer/footer";


function App() {
  return (
    <AuthContext>
      <AppDiv>
        <Header />
        <SearchBar/>
        <Footer/>
      </AppDiv>
    </AuthContext>
  );
}

export default App;