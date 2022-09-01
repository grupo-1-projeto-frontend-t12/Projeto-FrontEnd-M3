import { ContainerSearch } from "./searchBarStyle";
import { AiOutlineSearch } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


const SearchBar = () => {
  const { inputFilter, setInputFilter, filterDoctors } = useContext(AuthContext)
  
  return (
    <ContainerSearch>
      <div className="containerGeral">
        <div className="containerText">
          <h3>Procurar Especialidade</h3>
        </div>
        <div className="containerINput">
          <input type="text" placeholder="Procurar médico por especialidade"
          value={inputFilter}
          onChange={((event)=>setInputFilter(event.target.value))} />
          <button onClick={()=>filterDoctors(inputFilter)}>
            <AiOutlineSearch />
          </button>
        </div>
      </div>
    </ContainerSearch>
  );
};

export default SearchBar;

// onClick={()=>showDoctors()}