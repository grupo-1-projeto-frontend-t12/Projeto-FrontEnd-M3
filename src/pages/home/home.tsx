import Carousel from "../../components/Carousel/carousel";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import { motion } from "framer-motion";
import UnidadeInfoComponent from "../../components/UnidadeInfoComponent/unidadeInfoComponent";

const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
     <UnidadeInfoComponent/>
      <Footer />
    </>
  );
};

export default Home;
