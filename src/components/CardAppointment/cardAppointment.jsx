import { ContainerCardAppointment } from "./cardAppointmentStyle"
import {MdOutlinePlace} from "react-icons/md"
import {AiOutlineClockCircle} from "react-icons/ai"
import {BsCalendar3} from "react-icons/bs"

const CardAppointment = () =>{

    return (
        <ContainerCardAppointment>
            {
                <>                                    
                <div className="containerHeader">
                   <h2>NOME DO MEDICO</h2> 
                   <button>Cancelar Consulta</button>
                </div> 
                <span>Especialidade</span> 
                <div className="containerDataAppointment">
                    <h3><BsCalendar3/> dia da semana</h3>
                    <h3><AiOutlineClockCircle/> horario</h3>
                    <h3><MdOutlinePlace/> Endereço</h3>
                </div>
              
                </>
            }

        </ContainerCardAppointment>
    )

}

export default CardAppointment