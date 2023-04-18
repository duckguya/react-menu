import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});

export const isOpenAtom = atom({
  key: "isOpen",
  default: true,
});
