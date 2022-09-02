import ButtonAppointment from "../../components/ButtonAppointment/buttonAppointment";
import CardScheduleDoctor from "../../components/CardScheduleDoctors/cardScheduleDoctors";
import Footer from "../../components/Footer/footer";
import Menu from "../../components/Menu/menu";
import SearchBar from "../../components/SearchBar/searchBar";
import { ContainerCorpoClinicoHeader } from "../CorpoClinico/corpoClinicoStyle";
import Logo from "../../assets/img/logo/KenzieMED (1).svg";
import { motion, AnimatePresence } from "framer-motion";

const Doctor = () => {
  return (
    <>
      <ContainerCorpoClinicoHeader>
        <div className="container">
          <img src={Logo} alt="Logo KenzieMED" />
          <div className="menus">
            <Menu />
            <div className="container-buttons">
              <ButtonAppointment />
            </div>
          </div>
        </div>
        <SearchBar />
      </ContainerCorpoClinicoHeader>

      <motion.div
        id="app__motion--content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        transition={{ duration: 0.5 }}
      >
        <CardScheduleDoctor />
      </motion.div>

      <Footer />
    </>
  );
};

export default Doctor;
