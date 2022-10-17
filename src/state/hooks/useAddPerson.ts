import { useSetRecoilState } from "recoil";
import { listPeoplesState } from "../atom";

export default function useAddPerson() {
  const setList = useSetRecoilState(listPeoplesState);

  return (namePerson: string) => {
    setList((oldList) => [...oldList, namePerson]);
  };
}
