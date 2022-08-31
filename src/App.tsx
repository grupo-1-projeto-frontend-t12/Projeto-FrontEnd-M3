import { AppDiv } from "./styles/appCSS/AppCSS";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import CardAppointment from "./components/CardAppointment/cardAppointment";

function App() {
  return (
      <AppDiv>
        <Header />
        
        <Footer />
      </AppDiv>
  );
}

export default App;