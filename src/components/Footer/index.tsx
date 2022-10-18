import { useNavigate } from "react-router-dom";
import useListPeoples from "../../state/hooks/useListPeoples";
import Sacolas from "../../assets/sacolas.png";
import { FooterContainer } from "./styles";
import { Button } from "../../styles/defaultStyles";

export default function Footer() {
  const listPeoples = useListPeoples();
  const navigate = useNavigate();

  return (
    <FooterContainer>
      <Button
        disabled={listPeoples.length < 3}
        onClick={() => navigate("/sorteio")}
      >
        Iniciar Brincadeira!
      </Button>

      <img src={Sacolas} alt="Imagem de sacolas" />
    </FooterContainer>
  );
}
