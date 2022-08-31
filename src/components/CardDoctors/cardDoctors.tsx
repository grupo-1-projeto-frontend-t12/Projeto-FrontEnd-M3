import { ContainerDoctors, ListDoctors } from "./cardDoctorsStyle";
import { BsCalendar3 } from "react-icons/bs";
import { MdOutlinePlace, MdSchedule } from "react-icons/md";
import {  useContext, useEffect } from "react";
import api from "../../services/api";

import { AuthContext } from "../../context/AuthContext";

const CardDoctors = () => {

  
  const { setDoctorsList, doctorsList, setDoctorSchedule } = useContext(AuthContext)

  const getDoctor = async () =>{
    const response = await api.get('/doctors')    
    setDoctorsList(response.data)
  }
  useEffect(()=>{
    getDoctor()
  },[])

  return (

    <ContainerDoctors>
      <h2>Corpo Clinico</h2>
        <ListDoctors>
          {doctorsList.map((doctor) => (           
          <li>
                <div className="containerHeader">
                  <h2>{doctor.name}</h2>
                  <button onClick={() => {                    
                     setDoctorSchedule(doctor.schedules)
                     console.log(doctor.schedules)
                  } }>
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
    </ContainerDoctors>
  );
};

export default CardDoctors;