 

import axiosInstance from "./axios";

// Define individual functions
export const fetch = async (): Promise<any> => {
  return await axiosInstance.get("/api/v1/profiles");
};

export const create = async (payload: any): Promise<any> => {
  return await axiosInstance.post("/api/v1/profiles", payload);
};

export const upload = async (id: string | number, payload: FormData): Promise<any> => {
  return await axiosInstance.post(`/api/v1/profiles/${id}/upload_image`, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Grouped exports
const profilesApi = {
  fetch,
  create,
  upload,
};

export default profilesApi;
