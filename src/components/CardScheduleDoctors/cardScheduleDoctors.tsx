import { useContext } from "react";
import { ContainerRenderDoctorSchedule, ContainerSchedule } from "./cardScheduleDoctorStyle";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AuthContext } from "../../context/AuthContext";
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const CardScheduleDoctor = () => {
  const { doctorSchedule, doctor } = useContext(AuthContext);
  const navigate = useNavigate();

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
            {doctorSchedule.map((doctor) => (
              <li key={doctor.id}>
                <div className="containerList">
                  <BsCalendar3 />
                  <h3>{doctor.dia}</h3>
                </div>
                <div className="containerList">
                  <AiOutlineClockCircle />
                  <h3>{doctor.hora}</h3>
                </div>
                <button>
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