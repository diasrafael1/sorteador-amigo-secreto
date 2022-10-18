import { useNavigate } from "react-router-dom";
import useListPeoples from "../../state/hooks/useListPeoples";

export default function Footer() {
  const listPeoples = useListPeoples();
  const navigate = useNavigate();

  return (
    <footer>
      <button
        disabled={listPeoples.length < 3}
        onClick={() => navigate("/sorteio")}
      >
        Iniciar Brincadeira!
      </button>
    </footer>
  );
}
