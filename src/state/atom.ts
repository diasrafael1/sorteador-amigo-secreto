import { atom } from "recoil";

export const listPeopleState = atom<string[]>({
  key: "listPeoples",
  default: [],
});

export const resultShuffle = atom<Map<string, string>>({
  key: "resultShuffle",
  default: new Map(),
});

export const errorMessageState = atom<string>({
  key: "errorState",
  default: "",
});
