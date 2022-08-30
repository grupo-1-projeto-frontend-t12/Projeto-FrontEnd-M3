import Menu from "../menu/menu";
import Logo from "../../assets/img/logo/KenzieMED.png"
import { TagHeader } from "./headerCSS";

const Header = () => {
  return (
    <TagHeader>
      <div>
        <img src={Logo} alt="Logo KenzieMED" />
        <Menu />
      </div>
    </TagHeader>
  );
};

export default Header;