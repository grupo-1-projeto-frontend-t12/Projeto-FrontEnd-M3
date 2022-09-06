import {
  ContainerRenderDoctorSchedule,
  ContainerSchedule,
} from "./cardScheduleDoctorStyle";
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
import { IAppointmentInfo } from "../../interface/IAppointmentInfo";
import { toast } from "react-toastify";
import sucessicon from "../../assets/img/logo/sucessicon.svg";
import iconerror from "../../assets/img/logo/errorico.svg";
import { IError } from "../../interface/IError";
import { StyledAlert } from "../EmptyObjectAlert/emptyObjectAlert";
import { AiOutlineExclamationCircle } from "react-icons/ai";
const CardScheduleDoctor = () => {
  const { doctorSchedule, doctor, user, setDoctorSchedule, setIsLoading } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const postAppointment = async (
    data: IAppointmentInfo,
    schedule: IDoctorSchedule
  ) => {
    try {
      await api.post(`/appointment`, data);
      navigate("/dashboard", { replace: true });
      setTimeout(() => {
        setIsLoading(false);
        toast.success("Agendamento concluído!", {
          theme: "colored",
          icon: <img src={sucessicon} alt="icon sucess" />,
        });
      }, 2000);

      setDoctorSchedule(
        doctorSchedule.filter((horario) => horario.id !== schedule.id)
      );
    } catch (error) {
      const err = error as AxiosError<IError>;
      console.log(err.response?.data);
      toast.error("Algo deu errado!", {
        theme: "colored",
        icon: <img src={iconerror} alt="icon error" />,
      });
    }
  };

  const editScheduleDoctor = async (schedule: IDoctorSchedule) => {
    try {
      const obj = {
        schedules: doctorSchedule.filter(
          (horario) => horario.id !== schedule.id
        ),
      };
      const token = localStorage.getItem("@context-KenzieMed:token");
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await api.patch(`/doctors/${doctor.id}`, obj);

      navigate("/dashboard", { replace: true });
    } catch (error) {
      const err = error as AxiosError<IError>;
      console.log(err.response?.data);
    }
  };

  const setAppointmentToUser = (schedule: IDoctorSchedule) => {
    const appointInfo: IAppointmentInfo = {
      userId: user.id,
      doctor: doctor.id,
      dia: schedule.dia,
      horario: schedule.hora,
      address: doctor.address,
      speciality: doctor.speciality,
      name: doctor.name,
    };
    setIsLoading(true);
    postAppointment(appointInfo, schedule);
    editScheduleDoctor(schedule);
  };

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
            {doctorSchedule.length > 0 ? (
              doctorSchedule.map((schedule) => (
                <li key={schedule.id}>
                  <div className="containerList">
                    <BsCalendar3 />
                    <h3>{schedule.dia}</h3>
                  </div>
                  <div className="containerList">
                    <AiOutlineClockCircle />
                    <h3>{schedule.hora}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setAppointmentToUser(schedule)}
                  >
                    <AiOutlinePlusCircle />
                  </button>
                </li>
              ))
            ) : (
              <StyledAlert>
                <AiOutlineExclamationCircle size={28} />
                Horários indisponíveis
              </StyledAlert>
            )}
          </ul>
        </ContainerSchedule>
      </div>
    </ContainerRenderDoctorSchedule>
  );
};

export default CardScheduleDoctor;
