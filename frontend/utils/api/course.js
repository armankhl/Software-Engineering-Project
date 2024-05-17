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

export const getCourseAPI = async (data) => {
  const user = getUser();
  const response = await apiService.get(
    `/users/professor/${user.username}/lesson/`,
    data
  );

  return response.data;
};

export const deleteCourseAPI = async (data) => {
  //console.log(data);
  const user = getUser();
  const response = await apiService.delete(
    `/users/professor/${user.username}/lesson/${data.id}`
  );

  return response.data;
};
