import axios from "axios";

const isProduction = process.env.NEXT_PUBLIC_ENV === 'production';

const baseURL = isProduction
  ? process.env.NEXT_PUBLIC_API_URL_PROD
  : process.env.NEXT_PUBLIC_API_URL_DEV || 'http://localhost:3000';

export const baseApi = axios.create({
  baseURL,
});
