import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";

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
export const accessTokenState = atom({
  key: "accessTokenState",
  default: ""
});
export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  }
});
export const shoppingDataState = atom({
  key: "shoppingDataState",
  default: {
    name: "",
    phone: "",
    address: "",
    detailAddress: "",
    addressCode: "",
    point: 0,
    list: [],
    priceSum: 0,
    sum: 0
  }
});
