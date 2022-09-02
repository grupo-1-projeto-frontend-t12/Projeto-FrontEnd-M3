import { RiAccountCircleLine } from "react-icons/ri";
import { ContainerCards } from "./containerCardsStyles";
import { DivModalPerfil } from "./divModalPerfil";
import { AuthContext } from "../../context/AuthContext";
import { TagDivUser } from "./tagDivUserStyles";
import { useContext } from "react";
import CardAppointment from "../../components/CardAppointment/cardAppointment";
import InfoUserDoc from "../../components/ModalInfoUserDoc/infoUserDoc";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";

const Dashboard = () => {
  const { isOpenModal, setIsOpenModal, user } = useContext(AuthContext);

  return (
    <>
      <Header />
      <TagDivUser>
        <button type="button" onClick={() => setIsOpenModal(true)}>
          <RiAccountCircleLine className="Icon" />
          Perfil
        </button>
        <div>
          <p>Olá,</p>
          <span>{user.name}</span>
        </div>
      </TagDivUser>
      {isOpenModal && (
        <DivModalPerfil>
          <InfoUserDoc />
        </DivModalPerfil>
      )}
      <CardAppointment />
      <Footer />
    </>
  );
};

export default Dashboard;