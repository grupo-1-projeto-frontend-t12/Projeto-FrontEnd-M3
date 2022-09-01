import { useState } from "react";
import { ContainerRenderDoctorSchedule, ContainerSchedule } from "./cardScheduleDoctorStyle";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IDoctors } from "../../interface/IDoctors";

const CardScheduleDoctor = () => {
  const [doctor, setDoctor] = useState<IDoctors>();

  // pegar ID do médico clicado e fazer o GET e setar no SETDOCTORS

  return (
    <ContainerRenderDoctorSchedule>
      <div className="doctorData">
        <h2>doctor.name</h2>
        <span>doctor.CRM</span>
      </div>

      <div className="containerSchedule">
        <ContainerSchedule>
          <ul>
            {
              //    fazer MAP AQUI
              <li>
                <div className="containerList">
                  <BsCalendar3 />
                  <h3>dia</h3>
                </div>
                <div className="containerList">
                  <AiOutlineClockCircle />
                  <h3>hora</h3>
                </div>
                <button>
                  <AiOutlinePlusCircle />
                </button>
              </li>
            }
          </ul>
        </ContainerSchedule>
      </div>
    </ContainerRenderDoctorSchedule>
  );
};

export default CardScheduleDoctor;