import { apiService } from "./axios";

export const loginAPI = async (data) => {
  const response = await apiService.post("/users/professor-login/", data);

  return response.data;
};
