import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "./buttonStyle";

const ButtonAppointment = () => {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const appointment = () => {
    {login ? navigate("/corpoClinico", { replace: true }) : navigate("/login", { replace: true })}
  }
  return <Button onClick={appointment}>Agendar Consulta / Exames</Button>;
};

export default ButtonAppointment;