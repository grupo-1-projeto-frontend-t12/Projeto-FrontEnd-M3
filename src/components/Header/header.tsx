import Menu from "../Menu/menu";
import ButtonAppointment from "../ButtonAppointment/buttonAppointment";
import SearchBar from "../SearchBar/searchBar";
import Logo from "../../assets/img/logo/KenzieMED (1).svg";
import Medica from "../../assets/img/logo/medica.svg";
import { TagHeader } from "./headerCSS";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const { login } = useContext(AuthContext);

  return (
    <TagHeader login={login}>
      <div className="container">
        <img src={Logo} alt="Logo KenzieMED" />
        <div className="container-buttons">
          <Menu />
          {!login ? <ButtonAppointment /> : null}
        </div>
      </div>
      {login ? (
        <SearchBar />
      ) : (
        <div className="container-info">
          <img src={Medica} alt="Medica" />
          <h2>Faça seu agendamento rápido e fácil</h2>
        </div>
      )}
    </TagHeader>
  );
};

export default Header;