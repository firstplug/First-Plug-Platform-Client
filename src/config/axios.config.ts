import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance = axios.create({ baseURL });

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
