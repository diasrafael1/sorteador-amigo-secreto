import { FormEvent, useRef, useState } from "react";
import useAddPerson from "../../state/hooks/useAddPerson";

export default function Form() {
  const addPerson = useAddPerson();
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function SubmitAddPerson(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addPerson(name);
    setName("");
    inputRef.current?.focus();
  }

  return (
    <form onSubmit={SubmitAddPerson}>
      <input
        type="text"
        placeholder="Insira os nomes do Participantes"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={inputRef}
      />
      <button disabled={!name}>Adicionar</button>
    </form>
  );
}
