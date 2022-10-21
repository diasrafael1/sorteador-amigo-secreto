import makeRaffle from "./makeRaffle";

describe("dado um sorteio de amigo secreto", () => {
  test("cada participante não sorteie o próprio nome", () => {
    const participantes = [
      "Ana",
      "Catarina",
      "Matheus",
      "João",
      "Maria",
      "Carlos",
    ];
    const raffle = makeRaffle(participantes);
    participantes.forEach((participante) => {
      //selecionando o amigo secreto referente ao nome do participante e esperado que não seja o mesmo nome
      const friend = raffle.get(participante);
      expect(friend).not.toEqual(participante);
    });
  });
});
