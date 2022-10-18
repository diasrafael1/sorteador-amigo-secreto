import { useRecoilState } from "recoil";
import { errorMessageState } from "../atom";

export default function useErrorMessage() {
  const message = useRecoilState(errorMessageState);

  return message;
}
