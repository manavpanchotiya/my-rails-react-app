import axiosInstance from "./axios";

interface ApiOptions {
  module: string; // Module name, e.g., "categories", "users"
}

export const createApi = ({ module }: ApiOptions) => {
  return {
    fetch: async (): Promise<any> => {
      return await axiosInstance.get(`/api/v1/${module}`);
    },
    create: async (payload: any): Promise<any> => {
      return await axiosInstance.post(`/api/v1/${module}`, payload);
    },
    update: async (id: string | number, payload: any): Promise<any> => {
      return await axiosInstance.put(`/api/v1/${module}/${id}`, payload);
    },
    bulkDelete: async (payload: any): Promise<any> => {
      return await axiosInstance.delete(`/api/v1/${module}/bulk_destroy`, { data: payload });
    },
    destroy: async (id: string | number): Promise<any> => {
      return await axiosInstance.delete(`/api/v1/${module}/${id}`);
    },
  };
};
