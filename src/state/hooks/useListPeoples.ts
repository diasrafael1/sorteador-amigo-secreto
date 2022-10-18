import { useRecoilValue } from "recoil";
import { listPeoplesState } from "../atom";

export default function useListPeoples() {
  return useRecoilValue(listPeoplesState);
}
