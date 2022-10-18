import { useRecoilState, useSetRecoilState } from "recoil";
import { errorMessageState, listPeoplesState } from "../atom";

export default function useAddPerson() {
  const [list, setList] = useRecoilState(listPeoplesState);
  const setErrorMessage = useSetRecoilState(errorMessageState);

  return (namePerson: string) => {
    if (list.includes(namePerson)) {
      return setErrorMessage("Nomes duplicados não são permitidos!");
    }
    return setList((oldList) => [...oldList, namePerson]);
  };
}
