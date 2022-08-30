import Menu from "../menu/menu";
import Logo from "../../assets/img/logo/KenzieMED (1).svg";
import Medica from "../../assets/img/logo/medica.svg"
import { TagHeader } from "./headerCSS";
import ButtonAppointment from "../ButtonAppointment/buttonAppointment";

const Header = () => {
  return (
    <TagHeader>
      <div className="container">
        <img src={Logo} alt="Logo KenzieMED" />
        <div className="container-buttons">
          <Menu />
          <ButtonAppointment />
        </div>
      </div>
        <div className="container-info">
          <img src={Medica} alt="Medica" />
          <h2>Faça seu agendamento rápido e fácil</h2>
        </div>
    </TagHeader>
  );
};

export default Header;
