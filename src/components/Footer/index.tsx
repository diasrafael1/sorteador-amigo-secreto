import { useNavigate } from "react-router-dom";
import useListPeople from "../../state/hooks/useListPeople";
import Sacolas from "../../assets/sacolas.png";
import { FooterContainer } from "./styles";
import { Button } from "../../styles/defaultStyles";
import useRaffler from "../../state/hooks/useRaffler";

export default function Footer() {
  const listPeoples = useListPeople();
  const navigate = useNavigate();
  const makeRaffle = useRaffler();

  function start() {
    makeRaffle();
    navigate("/sorteio");
  }

  return (
    <FooterContainer>
      <Button disabled={listPeoples.length < 3} onClick={start}>
        Iniciar Brincadeira!
      </Button>

      <img src={Sacolas} alt="Imagem de sacolas" />
    </FooterContainer>
  );
}
