import axios, { AxiosResponse } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

type User = {
  fullName: string;
  email: string;
  password: string;
};

type LoginUser = {
  email: string;
  password: string;
};

export class AuthServices {
  static async register(data: User) {
    return await axios.post(`${BASE_URL}/api/auth/register`, data);
  }

  static async login(data: LoginUser) {
    const user: AxiosResponse = await axios.post(
      `${BASE_URL}/api/auth/login`,
      data
    );
    return user.data;
  }

  static async me(token: string) {
    const user: AxiosResponse = await axios.get(`${BASE_URL}/api/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return user.data.payload;
  }
}
