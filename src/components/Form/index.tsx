import { FormEvent, useRef, useState } from "react";
import useAddPerson from "../../state/hooks/useAddPerson";
import useErrorMessage from "../../state/hooks/useErrorMessage";

export default function Form() {
  const addPerson = useAddPerson();
  const errorMessage = useErrorMessage();
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
      {errorMessage && <p role="alert">{errorMessage}</p>}
    </form>
  );
}
