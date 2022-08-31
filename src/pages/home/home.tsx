import { RiAccountCircleLine } from "react-icons/ri";
import { ContainerHeader } from "./homeCSS";
import { ContainerCards } from "./containerCardsCSS";
import { AuthContext } from "../../context/AuthContext";
import { TagFormUser } from "./tagFormUserCSS";
import { useContext } from "react";
import Footer from "../../components/Footer/footer";
import Menu from "../../components/Menu/menu";
import CardDoctors from "../../components/CardDoctors/cardDoctors";

const Home = () => {
  const Logo: string = require("../../assets/img/logo/KenzieMED.png");

  const { setIsOpenModal, user } = useContext(AuthContext);

  return (
    <>
      <ContainerHeader>
        <div className="container">
          <img src={Logo} alt="Logo KenzieMED" />
          <div className="container-buttons">
            <Menu />
          </div>
        </div>
      </ContainerHeader>

      <TagFormUser onSubmit={() => setIsOpenModal(true)}>
        <button type="submit">
          <RiAccountCircleLine className="Icon" />
          Editar
        </button>
        <div>
          <p>Olá,</p>
          <span>{user.name}BatataFrita de Albuquerque</span>
        </div>
      </TagFormUser>

      <ContainerCards>
        <CardDoctors />
      </ContainerCards>

      <Footer />
    </>
  );
};

export default Home;
