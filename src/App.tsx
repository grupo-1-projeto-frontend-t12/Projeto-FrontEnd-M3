import { AppDiv } from "./styles/appCSS/AppCSS";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import CardScheduleDoctor from "./components/CardScheduleDoctors/cardScheduleDoctors";

function App() {
  return (
      <AppDiv>
        <Header />
        <CardScheduleDoctor/>
        <Footer />
      </AppDiv>
  );
}

export default App;