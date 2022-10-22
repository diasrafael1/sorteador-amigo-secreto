import { FormEvent, useRef, useState } from "react";
import useAddPerson from "state/hooks/useAddPerson";
import useErrorMessage from "state/hooks/useErrorMessage";
import { Button } from "styles/defaultStyles";
import { FormContainer } from "./styles";

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
    <>
      <FormContainer onSubmit={SubmitAddPerson}>
        <input
          type="text"
          placeholder="Insira os nomes do Participantes"
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={inputRef}
        />
        <Button disabled={!name}>Adicionar</Button>
      </FormContainer>
      {errorMessage && <p role="alert">{errorMessage}</p>}
    </>
  );
}
