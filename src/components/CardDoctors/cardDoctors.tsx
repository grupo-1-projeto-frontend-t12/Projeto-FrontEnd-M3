import { ContainerDoctors, ListDoctors } from "./cardDoctorsStyle";
import { BsArrowLeftShort, BsCalendar3 } from "react-icons/bs";
import { MdOutlinePlace } from "react-icons/md";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ICardDoctorProps } from "../../interface/ICardDoctorProps";
import api from "../../services/api";

const CardDoctors = ({ doctorsList }: ICardDoctorProps) => {
  const { setDoctorSchedule, setDoctor, setDoctorsList, itemFilter, setItemFilter } = useContext(AuthContext);

  const navigate = useNavigate();

  const getDoctor = async () => {
    const response = await api.get("/doctors");
    setDoctorsList(response.data);
    
  };

  useEffect(() => {
    getDoctor();
  }, []);

  return (
    <ContainerDoctors>
      <div className="card-doctors-header">
        <h2>Corpo Clinico</h2>
        {itemFilter.length > 0 && <button onClick={() => {setItemFilter([])}}>
          <BsArrowLeftShort /> Voltar
        </button>}
      </div>
      {doctorsList ? (
        <ListDoctors>
          {doctorsList.map((doctor) => (
            <li
              key={doctor.id}
              onClick={() => {
                setDoctorSchedule(doctor.schedules);
                setDoctor(doctor);
                navigate(`/corpoclinico/doctor:${doctor.id}`);
              }}
            >
              <div className="containerHeader">
                <h2>{doctor.name}</h2>
                <button>
                  <BsCalendar3 />
                </button>
              </div>
              <span>CRM - {doctor.CRM}</span>
              <h3>{doctor.speciality}</h3>
              <h3>
                <MdOutlinePlace />
                {doctor.address}
              </h3>
            </li>
          ))}
        </ListDoctors>
      ) : (
        <p>Nenhum médico cadastrado nessa especialidade</p>
      )}
    </ContainerDoctors>
  );
};

export default CardDoctors;