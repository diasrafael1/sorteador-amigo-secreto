import { atom } from "recoil";

export const listPeoplesState = atom<string[]>({
  key: "listPeoples",
  default: [],
});

export const errorMessageState = atom<string>({
  key: "errorState",
  default: "",
});
