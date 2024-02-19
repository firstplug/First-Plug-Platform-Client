import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const axiosInstance = axios.create({
  baseURL: API_URL,
});
axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
export default axiosInstance;
export class HTTPRequests {
  static async get(url: string) {
    return await axiosInstance.get(url);
  }

  static async post<T>(url: string, payload: T) {
    return await axiosInstance.post(url, payload);
  }

  static async put<T>(url: string, payload: T) {
    return await axiosInstance.put(url, payload);
  }
  static async delete(url: string) {
    return await axiosInstance.put(url);
  }
}
