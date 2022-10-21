import { useRecoilValue } from "recoil";
import { listPeopleState } from "../atom";

export default function useListPeople() {
  return useRecoilValue(listPeopleState);
}
