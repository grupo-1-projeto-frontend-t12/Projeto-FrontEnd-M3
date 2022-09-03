import { RiUserSettingsLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { TagDiv } from "./infoUserDocStyle";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const InfoUserDoc = () => {
  const { setLogin, setIsOpenModal } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const altFunction = () => {
    location.pathname === "/dashboard" ? editUser() : backToProfile();
  };

  const editUser = () => {
    setIsOpenModal(false);
    navigate("/user/edit", { replace: true });
  };

  const backToProfile = () => {
    setIsOpenModal(false);
    navigate("/dashboard", { replace: true });
  };

  const logout = () => {
    localStorage.clear();
    setLogin(false);
    setIsOpenModal(false);
    navigate("/", { replace: true });
  };

  return (
    <TagDiv>
      <button className="btnEdit" onClick={altFunction}>
        <RiUserSettingsLine className="IconPerfil" />
        {location.pathname === "/dashboard" ? "Editar Perfil" : "Perfil"}
      </button>
      <button className="btnExit" onClick={logout}>
        <MdLogout className="IconExit" />
        Sair
      </button>
    </TagDiv>
  );
};

export default InfoUserDoc;