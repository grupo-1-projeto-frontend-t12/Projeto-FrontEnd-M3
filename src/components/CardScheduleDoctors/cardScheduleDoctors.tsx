import { useContext} from "react";
import { ContainerRenderDoctorSchedule, ContainerSchedule } from "./cardScheduleDoctorStyle";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AuthContext } from "../../context/AuthContext";

const CardScheduleDoctor = () => {


const {doctorSchedule, doctor}= useContext(AuthContext)


  return (
    <ContainerRenderDoctorSchedule>
      <div className="doctorData">
        <h2>{doctor.name}</h2>
        <span>{doctor.speciality} - {doctor.CRM}</span>
      </div>

      <div className="containerSchedule">
        <ContainerSchedule>
          <ul>
            {
              doctorSchedule.map((doctor) =>              
              <li>
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
              )
            }
          </ul>
        </ContainerSchedule>
      </div>
    </ContainerRenderDoctorSchedule>
  );
};

export default CardScheduleDoctor;