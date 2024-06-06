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

export const getStudentCourseAPI = async () => {
  const response = await apiService.get(`/users/student/home/`);
  return response.data;
};

export const getCourseRequestProfessorAPI = async (id) => {
  const response = await apiService.get(`/users/request/professor/${id}`);

  return response.data;
};

export const createCourseRequestAPI = async ({ professorId, ...data }) => {
  const response = await apiService.post(
    `/users/request/professor/${professorId}`,
    data
  );

  return response.data;
};

export const updateRequestStatus = async (data) => {
  const user = getUser();
  const response = await apiService.patch(
    `/users/request/professor/${user.professorid}`,
    data
  );

  return response.data;
};

export const getCourseRequestStudentAPI = async (id) => {
  const response = await apiService.get(`/users/request/student/${id}`);

  return response.data;
};
