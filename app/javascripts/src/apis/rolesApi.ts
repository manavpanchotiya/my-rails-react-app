 

import axiosInstance from "./axios";

// Define individual functions
export const fetch = async (): Promise<any> => {
  return await axiosInstance.get("/api/v1/roles");
};

export const create = async (payload: any): Promise<any> => {
  return await axiosInstance.post("/api/v1/roles", payload);
};

export const update = async (id: string | number, payload: any): Promise<any> => {
  return await axiosInstance.put(`/api/v1/roles/${id}`, payload);
};

export const bulkDelete = async (payload: any): Promise<any> => {
  return await axiosInstance.delete("/api/v1/roles/bulk_destroy", { data: payload });
};

export const destroy = async (id: string | number): Promise<any> => {
  return await axiosInstance.delete(`/api/v1/roles/${id}`);
};

// Grouped exports
const rolesApi = {
  fetch,
  create,
  update,
  bulkDelete,
  destroy,
};

export default rolesApi;
