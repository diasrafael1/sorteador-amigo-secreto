import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Home from ".";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

describe("a pagina de configuração", () => {
  test("deve ser renderizada corretamente", () => {
    //Teste de snapshot
    const { container } = render(
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    );

    //irá tirar um snapshot do componente e salvará o html na pasta __snapshot__
    //se o componente estiver diferente de como está salvo no __snapshot__ o teste dará erro.
    expect(container).toMatchSnapshot();
  });
});
