

import axios, { AxiosRequestConfig, AxiosInstance } from "axios";
import store from "@/app/store";

const backendURL = process.env.APP_URL

console.log(process.env.VITE_SERVER_URL)
const axiosInstance: AxiosInstance = axios.create({
  baseURL: backendURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach the token to every request if it exists
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const staticHeaders = 'arish'
    const state = store.getState(); // Get the current Redux state
    const token = state.auth?.userToken; // Access the token from Redux auth slice
    config.headers["X-Galaxy-Header"] = "arish";

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
