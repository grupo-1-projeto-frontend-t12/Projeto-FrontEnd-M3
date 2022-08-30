import { useContext } from "react";
import { UserContext } from "../../context/AuthContext";
import { TagHeader } from "./headerCSS";

const Header = () => {
  const { login, setLogin } = useContext(UserContext);
  console.log("LOG DO LOGIN ", login); // APAGAR DEPOIS

  return (
    <TagHeader>
      <button type="button" onClick={() => setLogin(!login)}>
        TEST
      </button>
    </TagHeader>
  );
};

export default Header;