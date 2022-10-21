import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Footer from ".";
import useListPeople from "../../state/hooks/useListPeople";

jest.mock("../../state/hooks/useListPeople");

const mockNavigate = jest.fn();
const mockRaffle = jest.fn();

jest.mock("../../state/hooks/useRaffler", () => {
  return {
    __esModule: true,
    default: () => mockRaffle,
  };
});

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

describe("quando não existem participantes suficientes", () => {
  beforeEach(() => {
    (useListPeople as jest.Mock).mockReturnValue([]);
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
  beforeEach(() => {
    (useListPeople as jest.Mock).mockReturnValue([
      "Ana",
      "Catarina",
      "Matheus",
    ]);
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
    expect(mockRaffle).toHaveBeenCalledTimes(1);
  });
});
