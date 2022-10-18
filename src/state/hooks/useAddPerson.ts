import { useRecoilState, useSetRecoilState } from "recoil";
import { errorMessageState, listPeoplesState } from "../atom";

export default function useAddPerson() {
  const [list, setList] = useRecoilState(listPeoplesState);
  const setErrorMessage = useSetRecoilState(errorMessageState);

  return (namePerson: string) => {
    if (list.includes(namePerson)) {
      setErrorMessage("Nomes duplicados não são permitidos!");

      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    }
    return setList((oldList) => [...oldList, namePerson]);
  };
}
