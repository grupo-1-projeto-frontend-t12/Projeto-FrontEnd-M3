import Carousel from "../../components/Carousel/carousel";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import { motion, AnimatePresence } from "framer-motion";
import UnidadeInfoComponent from "../../components/UnidadeInfoComponent/unidadeInfoComponent";

const Home = () => {
  return (
    <>
      <Header />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          transition={{ duration: 0.5 }}
        >
          <Carousel />
        </motion.div>
        <UnidadeInfoComponent />
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default Home;
