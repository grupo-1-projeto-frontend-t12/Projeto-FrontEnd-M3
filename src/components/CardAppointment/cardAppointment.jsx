import { ContainerCardAppointment, ListDoctors } from "./cardAppointmentStyle";
import { MdOutlinePlace } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect } from "react";
import api from "../../services/api";

const CardAppointment = () => {
  const { setDoctorsList, doctorsList } =
    useContext(AuthContext);
  console.log(doctorsList);

  const getDoctor = async () => {
    const response = await api.get("/doctors");
    setDoctorsList(response.data);
  };
  useEffect(() => {
    getDoctor();
  }, []);
  return (
    <ContainerCardAppointment>
      <h2>Meus Agendamentos</h2>
      <ListDoctors>
        {doctorsList.map((doctor) => (
          <li key={doctor.id}>
            <div className="containerHeader">
              <h2>{doctor.name}</h2>
              <button>Cancelar Consulta</button>
            </div>
            <span>{doctor.speciality}</span>
            <div className="containerDataAppointment">
              {doctor.schedules.map((elem) => {
                return (
                  <div key={elem.id}>
                    <h3>
                      <BsCalendar3 />
                      {elem.dia}
                    </h3>
                    <h3>
                      <AiOutlineClockCircle />
                      {elem.hora}
                    </h3>
                    <h3>
                      <MdOutlinePlace />
                      {doctor.address}
                    </h3>
                  </div>
                );
              })}
            </div>
          </li>
        ))}
      </ListDoctors>
    </ContainerCardAppointment>
  );
};

export default CardAppointment;
