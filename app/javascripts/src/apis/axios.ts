 

import axios, { AxiosRequestConfig, AxiosInstance } from "axios";
import store from "@/app/store";

const backendURL =
  process.env.NODE_ENV !== "production"
    ? "http://127.0.0.1:3000"
    : import.meta.env.VITE_SERVER_URL;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: backendURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach the token to every request if it exists
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const state = store.getState(); // Get the current Redux state
    const token = state.auth?.userToken; // Access the token from Redux auth slice

    if (token) {
      config.headers["Authorization"] = `${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// // Handle global responses
// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response; // Pass through successful responses
//   },
//   (error) => {
//     if (error.response?.status === 403) {
//       // window.location.href = "/not-authorized";
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
