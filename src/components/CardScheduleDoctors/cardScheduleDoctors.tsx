import {
  ContainerRenderDoctorSchedule,
  ContainerSchedule,
} from "./cardScheduleDoctorStyle";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsArrowLeftShort } from "react-icons/bs";
import { IUserAppointment } from "../../interface/IUserAppointment";
import { IDoctorSchedule } from "../../interface/IDoctorSchedule";
import { BsCalendar3 } from "react-icons/bs";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import api from "../../services/api";
import { AxiosError } from "axios";
import { IAgendamento } from "../../interface/IAgendamento";

const CardScheduleDoctor = () => {
  const {
    doctorSchedule,
    doctor,
    user,
    setAppointment,
    appointment,
    setDoctorSchedule,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  async function postAppointment(
    data: IAgendamento,
    schedule: IDoctorSchedule
  ) {
    try {
      const response = await api.post(`/appointment`, data);
      setDoctorSchedule(
        doctorSchedule.filter((horario) => horario.id !== schedule.id)
      );
      const obj = {
        schedules: doctorSchedule,
      };
      const token = localStorage.getItem("@context-KenzieMed:token");
      console.log(token);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      await api.patch(`/doctors/${doctor.id}`, obj);
      /* setDoctorSchedule(resposta.data) */
    } catch (error) {
      const err = error as AxiosError;
      console.warn(err);
    }
  }

  function agendamento(schedule: IDoctorSchedule): void {
    const pacote: IAgendamento = {
      userId: user.id,
      doctor: doctor.id,
      dia: schedule.dia,
      horario: schedule.hora,
    };
    console.log(pacote);
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
                <button type="button" onClick={() => agendamento(schedule)}>
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
