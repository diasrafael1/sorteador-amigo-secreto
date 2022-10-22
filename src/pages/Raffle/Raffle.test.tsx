import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Raffle from ".";
import useListPeople from "../../state/hooks/useListPeople";
import useResultRaffle from "../../state/hooks/useResultRaffle";

jest.mock("../../state/hooks/useListPeople");

jest.mock("../../state/hooks/useResultRaffle");

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

    expect(options).toHaveLength(participantes.length);
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
});
