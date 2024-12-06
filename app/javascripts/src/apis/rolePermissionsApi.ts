 

import axiosInstance from "./axios";

// Define individual functions
export const fetch = async (): Promise<any> => {
  return await axiosInstance.get("/api/v1/role_permissions");
};

export const create = async (payload: any): Promise<any> => {
  return await axiosInstance.post("/api/v1/role_permissions", payload);
};

export const update = async (id: string | number, payload: any): Promise<any> => {
  return await axiosInstance.put(`/api/v1/role_permissions/${id}`, payload);
};

export const bulkDelete = async (payload: any): Promise<any> => {
  return await axiosInstance.delete("/api/v1/role_permissions/bulk_destroy", { data: payload });
};

export const destroy = async (id: string | number): Promise<any> => {
  return await axiosInstance.delete(`/api/v1/role_permissions/${id}`);
};

// Grouped exports
const rolePermissionsApi = {
  fetch,
  create,
  update,
  bulkDelete,
  destroy,
};

export default rolePermissionsApi;
