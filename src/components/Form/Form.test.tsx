import { fireEvent, render, screen, act } from "@testing-library/react";
import Form from "./";
import { RecoilRoot } from "recoil";

describe("o comportamento do formulário", () => {
  test("testar o bloqueio de adicionar participantes com o input vazio", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    //encontrar o DOM do input e botão
    const input = screen.getByPlaceholderText(
      "Insira os nomes do Participantes"
    );
    const button = screen.getByRole("button");

    //para o teste ser sucedido é esperado que o input esteja no documento e o botão desabilitado
    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  test("adicionar nome do participante caso exista um nome preenchido", () => {
    render(
      //precisamos encapsular o Form para o teste ter acesso ao array do Recoil para adicionar o nome.
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes do Participantes"
    );
    const button = screen.getByRole("button");

    //inserir valor no input (para simular um usuário) e clicar no botão
    fireEvent.change(input, {
      //event.target.value
      target: {
        value: "Name example",
      },
    });

    fireEvent.click(button);
    //garantir que o input esteja com o foco ativo e que não tenha um valor (limpar o input depois de clicar no botão)
    expect(input).toHaveFocus();
    expect(input).toHaveValue("");
  });

  test("nomes duplicados não podem ser adicionados", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes do Participantes"
    );
    const button = screen.getByRole("button");
    fireEvent.change(input, {
      target: {
        value: "Name example",
      },
    });
    fireEvent.click(button);
    fireEvent.change(input, {
      target: {
        value: "Name example",
      },
    });
    fireEvent.click(button);

    //selecionar o alert por meio do DOM
    const errorMessage = screen.getByRole("alert");

    //esperar que a mensagem do alert seja essa
    expect(errorMessage.textContent).toBe(
      "Nomes duplicados não são permitidos!"
    );
  });

  test("a mensagem de erro deve sumir apos o timer", () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      "Insira os nomes do Participantes"
    );
    const button = screen.getByRole("button");
    fireEvent.change(input, {
      target: {
        value: "Name example",
      },
    });
    fireEvent.click(button);
    fireEvent.change(input, {
      target: {
        value: "Name example",
      },
    });
    fireEvent.click(button);

    let errorMessage = screen.queryByRole("alert"); //é query pois não é obrigatório
    expect(errorMessage).toBeInTheDocument();

    //esperar que x tempo para a mensagem sumir
    act(() => {
      jest.runAllTimers();
    });

    errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeNull();
  });
});
