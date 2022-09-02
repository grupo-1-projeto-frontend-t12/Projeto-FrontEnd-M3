import { RiUserSettingsLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { TagDiv } from "./infoUserDocStyle";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const InfoUserDoc = () => {
  const { setLogin, setIsOpenModal } = useContext(AuthContext);

  const navigate = useNavigate();

  const Logout = () => {
    localStorage.clear();
    setLogin(false);
    setIsOpenModal(false);
    navigate("/");
  };

  return (
    <TagDiv>
      <button className="btnEdit" onClick={() => setIsOpenModal(false)}>
        <RiUserSettingsLine className="IconPerfil" />
        Editar perfil
      </button>
      <button className="btnExit" onClick={Logout}>
        <MdLogout className="IconExit" />
        Sair
      </button>
    </TagDiv>
  );
};

export default InfoUserDoc;