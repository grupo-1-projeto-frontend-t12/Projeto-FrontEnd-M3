import { ContainerDoctors } from "./cardDoctorsStyle";
import { BsCalendar3 } from "react-icons/bs";
import { MdOutlinePlace } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


const CardDoctors = () => {

  const { doctorsList } = useContext(AuthContext)

  return (
    <ContainerDoctors>
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
    </ContainerDoctors>
  );
};

export default CardDoctors;