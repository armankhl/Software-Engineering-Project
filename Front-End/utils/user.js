import { USER_KEY } from "./api/axios";
import { isSSR } from "./isSrr";

export const getUser = () => {
  if (isSSR()) return undefined;
  return JSON.parse(localStorage.getItem(USER_KEY));
};
