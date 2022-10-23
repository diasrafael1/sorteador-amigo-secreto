import useResultRaffle from "state/hooks/useResultRaffle";
import useListPeople from "state/hooks/useListPeople";
import { FormEvent, useState } from "react";
import { FormContainer } from "./styles";
import { Button } from "styles/defaultStyles";
import DadoIcon from "assets/dado-icon.svg";

interface Props {
  setFriend: React.Dispatch<React.SetStateAction<string>>;
}

export default function Form({ setFriend }: Props) {
  const listPeople = useListPeople();
  const result = useResultRaffle();
  const [person, setPerson] = useState("");

  function handleRaffle(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFriend(result.get(person) as string);

    setTimeout(() => {
      setFriend("");
    }, 3000);
  }

  return (
    <FormContainer onSubmit={handleRaffle}>
      <select
        required
        name="person"
        id="person"
        placeholder="Selecione o seu nome"
        value={person}
        onChange={(e) => setPerson(e.target.value)}
      >
        <option>Selecione seu nome</option>
        {listPeople.map((person) => (
          <option key={person}>{person}</option>
        ))}
      </select>
      <span>Clique em sortear para ver quem é seu amigo secreto!</span>
      <Button type="submit">
        <img src={DadoIcon} alt="Icone de dado" /> Sortear!
      </Button>
    </FormContainer>
  );
}
