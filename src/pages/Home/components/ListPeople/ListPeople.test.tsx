import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import ListPeople from ".";
import useListPeople from "../../../../state/hooks/useListPeople";

//como não podemos pegar a lista de fato no Recoil nos testes, simulamos com jest.mock os itens dessa lista
jest.mock("../../../../state/hooks/useListPeople");

describe("uma lista vázia de partipantes", () => {
  beforeEach(() => {
    (useListPeople as jest.Mock).mockReturnValue([]);
  });

  test("deve ser renderizada sem elementos", () => {
    render(
      <RecoilRoot>
        <ListPeople />
      </RecoilRoot>
    );

    const peoples = screen.queryAllByRole("listitem");

    expect(peoples).toHaveLength(0);
  });
});

describe("uma lista preenchida de partipantes", () => {
  const participantes = ["Ana", "Catarina"];
  beforeEach(() => {
    (useListPeople as jest.Mock).mockReturnValue(participantes);
  });

  test("deve renderizar os participantes", () => {
    render(
      <RecoilRoot>
        <ListPeople />
      </RecoilRoot>
    );

    const peoples = screen.queryAllByRole("listitem");

    expect(peoples).toHaveLength(participantes.length);
  });
});
