import axios from "axios";

const baseUrl = "http://127.0.0.1:8000";

export const apiService = axios.create({
  baseURL: baseUrl,
});

export const DRF_TOKEN_KEY = "token";

apiService.interceptors.request.use((req) => {
  // Set token in auth header
  req.headers.Authorization = `Bearer ${localStorage.getItem(DRF_TOKEN_KEY)}`;

  return req;
});
