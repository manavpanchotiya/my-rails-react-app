 

import axiosInstance from "./axios";

// Define individual functions
export const fetch = async (): Promise<any> => {
  return await axiosInstance.get("/api/v1/notifications");
};

export const allRead = async (): Promise<any> => {
  return await axiosInstance.patch("/api/v1/notifications/mark_all_as_read");
};

// Optionally export everything as a named object for grouped imports
const notificationsApi = {
  fetch,
  allRead
};

export default notificationsApi;
