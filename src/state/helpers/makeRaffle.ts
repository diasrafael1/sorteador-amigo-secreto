import shuffle from "just-shuffle";

export default function makeRaffle(people: string[]) {
  const total = people.length;
  const shuffleList = shuffle(people);
  const result = new Map<string, string>();
  for (let index = 0; index < total; index++) {
    const friend = index === total - 1 ? 0 : index + 1;
    result.set(shuffleList[index], shuffleList[friend]);
  }
  return result;
}
