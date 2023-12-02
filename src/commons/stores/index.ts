import { atom } from "recoil";

export const userEmailState = atom({
  key: "userEmailState",
  default: ""
});
export const userProviderState = atom({
  key: "userProviderState",
  default: ""
});
export const userPhoneState = atom({
  key: "userPhoneState",
  default: ""
});
