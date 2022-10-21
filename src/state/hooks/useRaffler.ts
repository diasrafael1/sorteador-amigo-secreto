import { useSetRecoilState } from "recoil";
import { resultShuffle } from "../atom";
import makeRaffle from "../helpers/makeRaffle";
import useListPeople from "./useListPeople";

export default function useRaffler() {
  const listPeople = useListPeople();
  const setResult = useSetRecoilState(resultShuffle);

  return () => {
    const result = makeRaffle(listPeople);
    setResult(result);
  };
}
