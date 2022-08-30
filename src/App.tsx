import AuthContext from "./context/AuthContext";
import { AppDiv } from "./styles/appCSS/AppCSS";
import Header from "./components/Header/header";
import Menu from "./components/menu/menu";
import ButtonAppointment from "./components/ButtonAppointment/buttonAppointment";
import Footer from "./components/Footer/footer";


function App() {
  return (
    <AuthContext>
      <AppDiv>
        <Header />
        <Menu/>
        <ButtonAppointment/>
        <Footer/>
      </AppDiv>
    </AuthContext>
  );
}

export default App;