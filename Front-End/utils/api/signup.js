import { apiService } from "./axios";

export const professorsignupAPI = async (data) => {
  const response = await apiService.post("/users/professor-register/", data);

  return response.data;
};

export const studentsignupAPI = async (data) => {
  const response = await apiService.post("/users/student-register/", data);

  return response.data;
};
