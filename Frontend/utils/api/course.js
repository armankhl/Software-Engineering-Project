import { getUser } from "../user";
import { apiService } from "./axios";

export const creatCourseAPI = async (data) => {
  const user = getUser();
  const response = await apiService.post(
    `/users/professor/${user.username}/lesson/`,
    data
  );

  return response.data;
};
