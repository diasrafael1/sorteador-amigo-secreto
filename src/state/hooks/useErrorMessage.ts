import { useRecoilValue } from "recoil";
import { errorMessageState } from "../atom";

export default function useErrorMessage() {
  const message = useRecoilValue(errorMessageState);

  return message;
}
