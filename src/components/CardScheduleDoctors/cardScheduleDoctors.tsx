import { useContext } from "react";
import {
  ContainerRenderDoctorSchedule,
  ContainerSchedule,
} from "./cardScheduleDoctorStyle";
import { AiFillPicture, AiOutlineClockCircle } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AuthContext } from "../../context/AuthContext";
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { IDoctorSchedule } from "../../interface/IDoctorSchedule";

const CardScheduleDoctor = () => {
  const { doctorSchedule, setDoctorSchedule, doctor, user } =
    useContext(AuthContext);
  const navigate = useNavigate();

  async function postAppointment(
    data: IUserAppointment,
    schedule: IDoctorSchedule
  ) {
    const response = await api
      .post(`/appointment`, data)
      .then((res) => {
        setDoctorSchedule(
          doctorSchedule.filter((horario) => horario.id !== schedule.id)
        );
        const resposta = api
          .patch(`/doctors/${doctor.id}`, doctorSchedule)
          .then()
          .catch((error) => {
            console.warn(error);
          });
      })
      .catch((error) => {
        console.warn(error);
      });
  }

  function agendamento(schedule: IDoctorSchedule): void {
    const pacote: IUserAppointment = {
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
                <button type="button" onClick={agendamento(schedule)}>
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
