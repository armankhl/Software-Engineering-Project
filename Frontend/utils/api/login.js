import { apiService } from "./axios";

export const loginAPI = async (data) => {
  const response = await apiService.post("/users/login/", data);

  return response.data;
};
