import { ContainerSearch } from "./searchBarStyle"
import {AiOutlineSearch} from "react-icons/ai"

const SearchBar = () =>{

    return (
       <ContainerSearch>
        <div className="containerGeral">
            <div className="containerText">
            <h3>Procurar Especialidade</h3>
            </div>
            <div className="containerINput">
                <input type="text" placeholder="Procurar médico por especialidade"/>
                <button><AiOutlineSearch/></button>
            </div>
        </div>
        
       </ContainerSearch>
    )
}

export default SearchBar