import { AppDiv } from "./styles/appCSS/AppCSS";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import CardScheduleDoctor from "./components/CardScheduleDoctors/cardScheduleDoctors";
import Home from "./pages/dashboard";

function App() {
  return (
      <AppDiv>
        <Home/>
      </AppDiv>
  );
}

export default App;