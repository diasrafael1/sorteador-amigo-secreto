import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Footer from ".";
import useListPeoples from "../../state/hooks/useListPeoples";

jest.mock("../../state/hooks/useListPeoples");

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

describe("quando não existem participantes suficientes", () => {
  beforeEach(() => {
    (useListPeoples as jest.Mock).mockReturnValue([]);
  });

  test("o sorteio não pode ser iniciado", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
  });
});

describe("quando existem participantes suficientes", () => {
  const participantes = ["Ana", "Catarina", "Matheus"];
  beforeEach(() => {
    (useListPeoples as jest.Mock).mockReturnValue(participantes);
  });

  test("o sorteio pode ser iniciado", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");

    expect(button).not.toBeDisabled();
  });

  test("o sorteio foi iniciado", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith("/sorteio");
  });
});
