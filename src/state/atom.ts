import { atom } from "recoil";

export const listPeoplesState = atom<string[]>({
  key: "listPeoples",
  default: [],
});
