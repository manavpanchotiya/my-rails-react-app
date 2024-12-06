

import axiosInstance from './axios';

// Define individual functions with appropriate types
export const update = async (payload: any): Promise<any> => {
  return await axiosInstance.patch("/signup", payload);
};

export const fetch = async (): Promise<any> => {
  return await axiosInstance.get("api/v1/users/fetch");
};

export const create = async (): Promise<any> => {
  return await axiosInstance.post("api/v1/users/signup");
};

export const changePassword = async (payload: any): Promise<any> => {
  return await axiosInstance.post("/change_password", payload);
};

export const destroy = async (): Promise<any> => {
  return await axiosInstance.delete("/signup");
};

export const bulkDelete = async (payload: any): Promise<any> => {
  return await axiosInstance.delete("/bulk_destroy", { data: payload });
};

export const updateUser = async (id: string | number, payload: any): Promise<any> => {
  return await axiosInstance.put(`/api/v1/users/${id}`, payload);
};

export const createUser = async (payload: any): Promise<any> => {
  return await axiosInstance.post("api/v1/users", payload);
};

// Grouped exports
const usersApi = {
  update,
  changePassword,
  bulkDelete,
  destroy,
};

export default usersApi;
