import axios from "axios";

const baseUrl = process.env.API_BASE_URL ?? "";

export const apiService = axios.create({
  baseURL: baseUrl,
});

export const DRF_TOKEN_KEY = "token";

apiService.interceptors.request.use((req) => {
  // Set token in auth header
  req.headers.Authorization = `Bearer ${localStorage.getItem(DRF_TOKEN_KEY)}`;

  return req;
});
