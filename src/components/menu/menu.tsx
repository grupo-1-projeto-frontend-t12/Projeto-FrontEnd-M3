import { AuthContext } from "../../context/AuthContext";
import { ContainerMenu } from "./menuStyle";
import { useContext } from "react";



const Menu = () => {
  const {isOpenModal, setIsOpenModal} = useContext(AuthContext);

  return (
    <ContainerMenu>
      <button><a>Corpo Clínico</a></button>
      <button><a>Exames</a></button>
      <button><a>Unidades</a></button>
      <button
      onClick={()=> setIsOpenModal(!isOpenModal)}
      ><a>Cadastre-se</a></button>
    </ContainerMenu>
  );
};

export default Menu;