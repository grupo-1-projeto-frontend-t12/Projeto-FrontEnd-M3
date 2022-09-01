import { useNavigate } from "react-router-dom";
import { ContainerMenu } from "./menuStyle";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <ContainerMenu>
      <button onClick={() => navigate("/", { replace: true })}>Home</button>
      <button onClick={() => navigate("/corpoclinico", { replace: true })}>Corpo Clínico</button>
      <button>Exames</button>
    </ContainerMenu>
  );
};

export default Menu;