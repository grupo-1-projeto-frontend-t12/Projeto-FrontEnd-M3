import CardDoctors from "../../components/CardDoctors/cardDoctors";
import Footer from "../../components/Footer/footer";
import SearchBar from "../../components/SearchBar/searchBar";
import Logo from "../../assets/img/logo/KenzieMED (1).svg";
import { ContainerCorpoClinicoHeader } from "./corpoClinicoStyle";
import Menu from "../../components/Menu/menu";
import ButtonAppointment from "../../components/ButtonAppointment/buttonAppointment";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const CorpoClinico = () => {
  const { itenFilter, doctorsList} = useContext(AuthContext)
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
      {itenFilter.length > 0 ? ( 
      <CardDoctors doctorsList={itenFilter}/>):(
      <CardDoctors doctorsList={doctorsList}/>)
      }
      <Footer />
    </>
  );
};

export default CorpoClinico;