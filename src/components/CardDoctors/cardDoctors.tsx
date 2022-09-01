import { ContainerDoctors, ListDoctors } from "./cardDoctorsStyle";
import { BsCalendar3 } from "react-icons/bs";
import { MdOutlinePlace } from "react-icons/md";
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
<<<<<<< HEAD
      {/* {doctorsList.map((doctor) => ( */}
        <>
          <div className="containerHeader">
            <h2>{/* {doctor.name} */}Daniel de Souza</h2>
            <button>
              <BsCalendar3 />
            </button>
          </div>
          <span>{/* {doctor.CRM} */}123456789</span>
          <h3>{/* {doctor.speciality} */}Padeiro</h3>
          <h3>
            <MdOutlinePlace />
            {/* {doctor.address} */}Campo Largo
          </h3>
        </>
     {/*  ))} */}
=======
      <h2>Corpo Clinico</h2>
        <ListDoctors>
          {doctorsList.map((doctor) => (           
          <li key={doctor.id}>
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
                  {doctor.address}
                </h3>
          </li>
          ))}
        </ListDoctors>
>>>>>>> 63ad5f687f03b3250f6a6ebef925eee23048e068
    </ContainerDoctors>
  );
};

export default CardDoctors;