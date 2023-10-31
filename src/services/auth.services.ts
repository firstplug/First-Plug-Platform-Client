import axios, { AxiosResponse } from "axios";

const apiURL = "http://localhost:3001";

type User = {
  fullName: string;
  email: string;
  password: string;
};

type LoginUser = {
  email: string;
  password: string;
}

export class AuthServices {
  static async register(data: User): Promise<AxiosResponse> {
    return await axios.post(`${apiURL}/api/auth/register`, data);
  }
  static async login(data: LoginUser): Promise<AxiosResponse> {
    const user = await axios.post(`${apiURL}/api/auth/login`, data);
    return user.data;
  }

  static async me(token: string): Promise<any> {
    const user = await axios.get(`${apiURL}/api/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return user.data.payload;
  }
}
