import { ContainerCardAppointment, ListDoctors } from "./cardAppointmentStyle";
import { MdOutlinePlace } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect } from "react";
import api from "../../services/api";
import { IUserAppointment } from "../../interface/IUserAppointment";
import { toast } from "react-toastify";
import sucessicon from "../../assets/img/logo/sucessicon.svg"
import { IError } from "../../interface/IError";
import { AxiosError } from "axios";
import iconerror from "../../assets/img/logo/errorico.svg"

const CardAppointment = () => {
  const { setAppointment, appointment, user } = useContext(AuthContext);

  const getAppointment = async () => {
    try {
      const response = await api.get(`/appointment/?userId=${user.id}`);
      setAppointment(response.data);
    } catch (error) {
      const err = error as AxiosError<IError>
      console.log(err.message)
      toast.error("Não foi possível fazer o agendamento!", {
        theme: "colored",
        icon: <img src={iconerror} alt="icon error"/>
      })
    }
  };

  const cancelAppointment = async (appoint: IUserAppointment) => {
    await api.delete(`/appointment/${appoint.id}`);
    const currentAppointments = await api.get(`/appointment/?userId=${user.id}`)
    .then((res) => res.data);
    setAppointment(currentAppointments);
    toast.success("Consulta cancelada!", {
      theme: "colored",
      icon: <img src={sucessicon} alt="icon sucess"/>
    })
  }

  useEffect(() => {
    getAppointment();
  }, []);

  return (
    <ContainerCardAppointment>
      <h2>Meus Agendamentos</h2>
      <ListDoctors>
        {appointment.map((appoint) => (
          <li key={appoint.id}>
            <div className="containerHeader">
              <h2>{appoint.doctor}</h2>
              <button onClick={() => cancelAppointment(appoint)}>
                Cancelar Consulta
              </button>
            </div>
            <span>{appoint.doctor}</span>
            <div className="containerDataAppointment">
              <div>
                <h3>
                  <BsCalendar3 />
                  {appoint.dia}
                </h3>
                <h3>
                  <AiOutlineClockCircle />
                  {appoint.horario}
                </h3>
                <h3>
                  <MdOutlinePlace />
                  {appoint.isConfirmed}
                </h3>
              </div>
            </div>
          </li>
        ))}
      </ListDoctors>
    </ContainerCardAppointment>
  );
};

export default CardAppointment;