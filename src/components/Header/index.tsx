import LogoSmall from "assets/logo-pequeno.png";
import Logo from "assets/logo.png";
import Person from "assets/participante.png";

import { HeaderContainer } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <img src={LogoSmall} alt="Logo" className="logoSmall" />
      <img src={Logo} alt="Logo" className="logo" />
      <img src={Person} alt="Pessoa" className="person" />
    </HeaderContainer>
  );
}
