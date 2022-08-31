import { RiUserSettingsLine } from "react-icons/ri"
import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md"
import { TagDiv } from "./infoUserDocStyle";

const InfoUserDoc = () => {

    const navigate = useNavigate();

    function Logout() {
        localStorage.clear();
        navigate("/");
      }

    return(
        <TagDiv>
            <button className="btnEdit"><RiUserSettingsLine/>Editar perfil</button>
            <button className="btnExit"onClick={Logout} ><MdLogout/>Sair</button>
        </TagDiv>
    )
}

export default InfoUserDoc;