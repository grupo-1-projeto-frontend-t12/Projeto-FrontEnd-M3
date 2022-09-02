import Carousel from "../../components/Carousel/carousel";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import Loading from "../../components/Loading/loading";
import { motion, AnimatePresence } from "framer-motion";

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
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default Home;
