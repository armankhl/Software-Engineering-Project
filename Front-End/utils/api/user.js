import { getUser } from "../user";
import { apiService } from "./axios";

export const getProfessorProfile = async () => {
  const res = apiService.get("/users/professor/profile-picture");
  return res;
};

export const getStudentProfile = async () => {
  const res = apiService.get("/users/student/profile-picture");
  return res;
};

export const updateProfessorProfile = async (data) => {
  const user = getUser();
  const res = apiService.patch(`/users/professor/profile/${user.id}/`, data);
  return res;
};

export const updateStudentProfile = async (data) => {
  const user = getUser();
  const res = apiService.patch(
    `/users/student/profile/${user.studentid}/`,
    data
  );
  return res;
};

export const getStudentFullProfile = async (id) => {
  const res = apiService.patch(`/users/student/profile/${id}/`);
  return res;
};

export const getStudentOjb = async (id) => {
  const res = apiService.patch(`/users/update/${id}/`);
  return res;
};

export const pointUserAPI = async (data) => {
  const res = apiService.post(`/users/professor/update-rate/`, data);
  return res;
};
