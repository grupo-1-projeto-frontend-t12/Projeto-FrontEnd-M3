import ButtonAppointment from "../../components/ButtonAppointment/buttonAppointment";
import CardScheduleDoctor from "../../components/CardScheduleDoctors/cardScheduleDoctors";
import Footer from "../../components/Footer/footer";
import Menu from "../../components/Menu/menu";
import SearchBar from "../../components/SearchBar/searchBar";
import { ContainerCorpoClinicoHeader } from "../CorpoClinico/corpoClinicoStyle";
import Logo from "../../assets/img/logo/KenzieMED (1).svg";

const Doctor = () =>{

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
  
        <CardScheduleDoctor/>
        
        <Footer />
      </>
    );


}

export default Doctor