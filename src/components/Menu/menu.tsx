import { useNavigate } from "react-router-dom";
import { ContainerMenu } from "./menuStyle";

const Menu = () => {
  const navigate = useNavigate();

  const toDoctorsPage = () => {
    navigate("/corpoClinico", { replace: true });
  };

  return (
    <ContainerMenu>
      <button onClick={() => toDoctorsPage}>Corpo Clínico</button>
      <button>Exames</button>
      <button>Unidades</button>
    </ContainerMenu>
  );
};

export default Menu;