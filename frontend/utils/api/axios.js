import axios from "axios";

const baseUrl = "http://127.0.0.1:8000";

export const apiService = axios.create({
  baseURL: baseUrl,
});

export const DRF_TOKEN_KEY = "token";
export const USER_KEY = "user";

apiService.interceptors.request.use((req) => {
  // Set token in auth header
  //console.log(req.url);
  if (
    req.url === "/users/login/" ||
    req.url === "/users/professor-register/" ||
    req.url === "/users/student-register/"
  ) {
    return req;
  }
  req.headers.Authorization = `Token ${localStorage.getItem(DRF_TOKEN_KEY)}`;

  return req;
});
