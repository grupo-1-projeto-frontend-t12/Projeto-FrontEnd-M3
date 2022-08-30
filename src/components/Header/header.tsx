import { useContext } from "react"
import { UserContext } from "../../context/authContext";
import { TagHeader } from "./headerCSS"

const Header = () => {

    const { login, setLogin } = useContext(UserContext)
    console.log("LOG DO LOGIN ",login) // APAGAR DEPOIS 

    return (
        <TagHeader>
           
        </TagHeader>
    )
}

export default Header;