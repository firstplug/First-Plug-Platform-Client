import axios from "axios";

let baseURL: string;
if (process.env.NODE_ENV === "development") {
  baseURL = process.env.NEXT_PUBLIC_API_URL_DEV;
} else {
  baseURL = process.env.NEXT_PUBLIC_API_URL_PROD;
}

console.log({ baseURL });
const axiosInstance = axios.create({ baseURL });
export const setAuthInterceptor = (token: string | null) => {
  return axiosInstance.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
};

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
