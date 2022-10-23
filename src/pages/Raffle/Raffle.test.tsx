import { act, fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Raffle from ".";
import useListPeople from "state/hooks/useListPeople";
import useResultRaffle from "state/hooks/useResultRaffle";

jest.mock("state/hooks/useListPeople");

jest.mock("state/hooks/useResultRaffle");

describe("na pagina de sorteio", () => {
  const participantes = ["Ana", "Catarina", "Matheus"];
  const result = new Map([
    ["Ana", "Catarina"],
    ["Catarina", "Matheus"],
    ["Matheus", "Ana"],
  ]);

  beforeEach(() => {
    (useListPeople as jest.Mock).mockReturnValue(participantes);
    (useResultRaffle as jest.Mock).mockReturnValue(result);
  });

  test("todos os participantes podem exibir o seu amigo secreto", () => {
    render(
      <RecoilRoot>
        <Raffle />
      </RecoilRoot>
    );

    const options = screen.queryAllByRole("option");

    expect(options).toHaveLength(participantes.length + 1); // +1 pois já vem uma option "Selecione seu nome".
  });

  test("o amigo secreto é exibido quando solicitado", () => {
    render(
      <RecoilRoot>
        <Raffle />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText("Selecione o seu nome");
    fireEvent.change(select, {
      target: {
        value: participantes[0],
      },
    });

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const friend = screen.getByRole("alert");
    expect(friend).toBeInTheDocument();
  });

  test("o amigo secreto deve sumir depois de n tempo", () => {
    jest.useFakeTimers();

    render(
      <RecoilRoot>
        <Raffle />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText("Selecione o seu nome");
    fireEvent.change(select, {
      target: {
        value: participantes[0],
      },
    });

    const button = screen.getByRole("button");
    fireEvent.click(button);

    let friend = screen.queryByRole("alert");
    expect(friend).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    friend = screen.queryByRole("alert");

    expect(friend).toBeNull();
  });
});
