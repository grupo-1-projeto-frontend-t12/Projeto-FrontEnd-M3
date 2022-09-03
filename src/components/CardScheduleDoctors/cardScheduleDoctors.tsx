import { ContainerRenderDoctorSchedule, ContainerSchedule } from "./cardScheduleDoctorStyle";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsArrowLeftShort } from "react-icons/bs";
import { IDoctorSchedule } from "../../interface/IDoctorSchedule";
import { BsCalendar3 } from "react-icons/bs";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import api from "../../services/api";
import { AxiosError } from "axios";
import { IAgendamento } from "../../interface/IAgendamento";
import { toast } from "react-toastify";
import sucessicon from "../../assets/img/logo/sucessicon.svg"

const CardScheduleDoctor = () => {

  const {
    doctorSchedule,
    doctor,
    user,
    setDoctorSchedule,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const postAppointment = async (data: IAgendamento, schedule: IDoctorSchedule) => {
    try {
      await api.post(`/appointment`, data);
      setDoctorSchedule(doctorSchedule.filter((horario) => horario.id !== schedule.id));
      const obj = {
        schedules: doctorSchedule,
      };
      navigate("/dashboard", { replace: true })
      toast.success("Agendamento concluído!", {
        theme: "colored",
        icon: <img src={sucessicon} alt="icon sucess"/>
      })
      const token = localStorage.getItem("@context-KenzieMed:token");
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      await api.patch(`/doctors/${doctor.id}`, obj);
    } catch (error) {
      const err = error as AxiosError;
      console.warn(err);
    }
  }

  const setAppointmentToUser = (schedule: IDoctorSchedule)  => {
    const pacote: IAgendamento = {
      userId: user.id,
      doctor: doctor.id,
      dia: schedule.dia,
      horario: schedule.hora,
    };
    postAppointment(pacote, schedule);
  }

  return (
    <ContainerRenderDoctorSchedule>
      <div className="doctorData">
        <div>
          <h2>{doctor.name}</h2>
          <span>
            {doctor.speciality} - CRM - {doctor.CRM}
          </span>
        </div>
        <button
          onClick={() => {
            navigate("/corpoclinico");
          }}
        >
          <BsArrowLeftShort /> Voltar
        </button>
      </div>

      <div className="containerSchedule">
        <ContainerSchedule>
          <ul>
            {doctorSchedule.map((schedule) => (
              <li key={schedule.id}>
                <div className="containerList">
                  <BsCalendar3 />
                  <h3>{schedule.dia}</h3>
                </div>
                <div className="containerList">
                  <AiOutlineClockCircle />
                  <h3>{schedule.hora}</h3>
                </div>
                <button type="button" onClick={() => setAppointmentToUser(schedule)}>
                  <AiOutlinePlusCircle />
                </button>
              </li>
            ))}
          </ul>
        </ContainerSchedule>
      </div>
    </ContainerRenderDoctorSchedule>
  );
};

export default CardScheduleDoctor;