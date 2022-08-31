import { AppDiv } from "./styles/appCSS/AppCSS";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Carousel from "./components/Carousel/carousel";
import { useContext, useEffect, useState } from "react";
import AuthContext from "./context/AuthContext";

function App() {
  return (
    <AppDiv>
      <Header />
      <Carousel />
      <Footer />
    </AppDiv>
  );
}

export default App;
