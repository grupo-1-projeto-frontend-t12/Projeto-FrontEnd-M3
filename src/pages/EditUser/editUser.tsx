import { useContext } from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import { AuthContext } from "../../context/AuthContext";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import InfoUserDoc from "../../components/ModalInfoUserDoc/infoUserDoc";
import { TagDivUser, DivModalPerfil } from "../Dashboard/dashboardStyles";
import { Container } from "./editUserSytles";
import { motion } from "framer-motion";
import FormEditUser from "../../components/FormEditUSer/formEditUser";
import { IUser } from "../../interface/IUser";

const EditUser = () => {
  const { isOpenModal, setIsOpenModal } = useContext(AuthContext);
  const loggedUser: IUser = JSON.parse(localStorage.getItem("@context-KenzieMed:user")!);

  return (
    <>
      <Header />
      <motion.div
        id="app__motion--content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        transition={{ duration: 0.5 }}
      >
        <Container>
          <TagDivUser>
            <button type="button" onClick={() => setIsOpenModal(!isOpenModal)}>
              <RiAccountCircleLine className="Icon" />
              Perfil
            </button>
            <div>
              <p>Olá,</p>
              <span>{loggedUser.name}</span>
            </div>
          </TagDivUser>
          {isOpenModal && (
            <DivModalPerfil>
              <InfoUserDoc />
            </DivModalPerfil>
          )}
          <FormEditUser />
        </Container>
      </motion.div>
      <Footer />
    </>
  );
};

export default EditUser;