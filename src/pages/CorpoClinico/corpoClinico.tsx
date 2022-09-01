import CardDoctors from "../../components/CardDoctors/cardDoctors";
import Footer from "../../components/Footer/footer";
import SearchBar from "../../components/SearchBar/searchBar";
import Logo from "../../assets/img/logo/KenzieMED (1).svg";
import { ContainerCorpoClinicoHeader } from "./corpoClinicoStyle";
import Menu from "../../components/Menu/menu";
import ButtonAppointment from "../../components/ButtonAppointment/buttonAppointment";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Header from "../../components/Header/header";

const CorpoClinico = () => {
  const { itemFilter, doctorsList } = useContext(AuthContext);
  return (
    <>
    <Header />
      {/* <ContainerCorpoClinicoHeader>
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
      </ContainerCorpoClinicoHeader> */}
      {itemFilter.length > 0 ? (
        <CardDoctors doctorsList={itemFilter} />
      ) : (
        <CardDoctors doctorsList={doctorsList} />
      )}
      <Footer />
    </>
  );
};

export default CorpoClinico;