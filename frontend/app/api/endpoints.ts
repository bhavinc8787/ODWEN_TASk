import apiClient from "./client";

// Product endpoints
export const productAPI = {
  getAll: () => apiClient.get("/products"),
  getById: (id: string) => apiClient.get(`/products/${id}`),
  create: (data: any) => apiClient.post("/products", data),
  update: (id: string, data: any) => apiClient.put(`/products/${id}`, data),
  delete: (id: string) => apiClient.delete(`/products/${id}`),
};

// Category endpoints
export const categoryAPI = {
  getAll: () => apiClient.get("/categories"),
  getById: (id: string) => apiClient.get(`/categories/${id}`),
  create: (data: any) => apiClient.post("/categories", data),
  update: (id: string, data: any) => apiClient.put(`/categories/${id}`, data),
  delete: (id: string) => apiClient.delete(`/categories/${id}`),
};

// Order endpoints
export const orderAPI = {
  getAll: () => apiClient.get("/orders"),
  getById: (id: string) => apiClient.get(`/orders/${id}`),
  create: (data: any) => apiClient.post("/orders", data),
  update: (id: string, data: any) => apiClient.put(`/orders/${id}`, data),
  delete: (id: string) => apiClient.delete(`/orders/${id}`),
};

// Dashboard endpoints
export const dashboardAPI = {
  getStats: () => apiClient.get("/dashboard/stats"),
  getReports: () => apiClient.get("/dashboard/reports"),
};
