import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { TagHeader } from "./headerStyle";
import ButtonAppointment from "../ButtonAppointment/buttonAppointment";
import SearchBar from "../SearchBar/searchBar";
import Medica from "../../assets/img/logo/medica.svg";
import Menu from "../Menu/menu";
import Logo from "../../assets/img/logo/KenzieMED (1).svg";
import { Link } from "react-router-dom";

const Header = () => {
  const { login } = useContext(AuthContext);

  return (
    <TagHeader login={login}>
      <div className="container">
        <Link to="/" ><img src={Logo} alt="Logo KenzieMED" /></Link>
        <div className="container-buttons">
          <Menu />
          <ButtonAppointment />
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
