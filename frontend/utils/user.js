import { USER_KEY } from "./api/axios";

export const getUser = () => {
    return JSON.parse(localStorage.getItem(USER_KEY));
  };