import { useRecoilValue } from "recoil";
import { resultShuffle } from "../atom";

export default function useResultRaffle() {
  return useRecoilValue(resultShuffle);
}
