import { FormEvent, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import useListPeople from "../../state/hooks/useListPeople";
import useResultRaffle from "../../state/hooks/useResultRaffle";

export default function Raffle() {
  const listPeople = useListPeople();
  const [person, setPerson] = useState("");
  const [friend, setFriend] = useState("");
  const result = useResultRaffle();

  function handleRaffle(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFriend(result.get(person) as string);
  }

  return (
    <>
      <Header />
      <Card>
        <h1>Quem vai tirar o papelzinho?</h1>
        <form onSubmit={handleRaffle}>
          <select
            required
            name="person"
            id="person"
            placeholder="Selecione o seu nome"
            value={person}
            onChange={(e) => setPerson(e.target.value)}
          >
            {listPeople.map((person) => (
              <option key={person}>{person}</option>
            ))}
          </select>
          <button type="submit">Sortear</button>
        </form>
        {friend && <p role="alert">{friend}</p>}
      </Card>
    </>
  );
}
