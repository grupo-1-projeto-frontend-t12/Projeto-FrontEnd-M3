import { ContainerDoctors, ListDoctors } from "./cardDoctorsStyle";
import { BsCalendar3 } from "react-icons/bs";
import { MdOutlinePlace} from "react-icons/md";
import { useContext, useEffect } from "react";
import api from "../../services/api";

import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";


const CardDoctors = () => {
  const { setDoctorsList, doctorsList, setDoctorSchedule, setDoctor} =
    useContext(AuthContext);

    const navigate = useNavigate();

  const getDoctor = async () => {
      const response = await api.get("/doctors");
      setDoctorsList(response.data);        
  };
  useEffect(() => {
    getDoctor();
  });




  return (
    <ContainerDoctors>
      <h2>Corpo Clinico</h2>
      {doctorsList ? (
        <ListDoctors>
          {doctorsList.map((doctor) => (
            <li  onClick={() => {     
              setDoctorSchedule(doctor.schedules); 
              setDoctor(doctor)
              navigate(`/corpoclinico/doctor:${doctor.id}`)
            }}>
              <div className="containerHeader">
                <h2>{doctor.name}</h2>           
                <button
                 
                >
                  <BsCalendar3 />
                </button>
               
              
              </div>
              <span>{doctor.CRM}</span>
              <h3>{doctor.speciality}</h3>
              <h3>
                <MdOutlinePlace />
                Endereço
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
