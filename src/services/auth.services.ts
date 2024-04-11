import { BASE_URL } from "@/config/axios.config";
import { LoginUser, RegisterUser } from "@/types";
import axios from "axios";
import { JWT } from "next-auth/jwt";

export class AuthServices {
  static async register(data: RegisterUser) {
    console.log(`${BASE_URL}/api/auth/register`);
    return await axios.post(`${BASE_URL}/api/auth/register`, data);
  }

  static async login(data: LoginUser) {
    const loginRes = await axios.post(`${BASE_URL}/api/auth/login`, {
      email: data.email,
      password: data.password,
    });

    return loginRes;
  }

  static async refreshToken(token: JWT): Promise<JWT> {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/auth/refresh`,
        {},
        {
          headers: {
            authorization: `Refresh ${token.backendTokens.refreshToken}`,
          },
        }
      );
      return { ...token, backendTokens: response.data };
    } catch (error) {
      throw error;
    }
  }
}
