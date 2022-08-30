<<<<<<< HEAD
import { useContext } from "react"
import { UserContext } from "../../context/authContext";
import { TagHeader } from "./headerCSS"
=======
import { useContext } from "react";
import { UserContext } from "../../context/AuthContext";
import { TagHeader } from "./headerCSS";
>>>>>>> 9435d055e2528e35a0e5fb6e0f4a8ccc54b2dfae

const Header = () => {
  const { login, setLogin } = useContext(UserContext);
  console.log("LOG DO LOGIN ", login); // APAGAR DEPOIS

<<<<<<< HEAD
    const { login, setLogin } = useContext(UserContext)
    console.log("LOG DO LOGIN ",login) // APAGAR DEPOIS 

    return (
        <TagHeader>
           
        </TagHeader>
    )
}
=======
  return (
    <TagHeader>
      <button type="button" onClick={() => setLogin(!login)}>
        TEST
      </button>
    </TagHeader>
  );
};
>>>>>>> 9435d055e2528e35a0e5fb6e0f4a8ccc54b2dfae

export default Header;