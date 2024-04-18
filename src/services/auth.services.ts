import { BASE_URL } from "@/config/axios.config";
import { LoginUser, RegisterUser, RegisterUserPlatforms } from "@/types";
import axios from "axios";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

export class AuthServices {
  static async register(data: RegisterUser) {
    return await axios.post(`${BASE_URL}/api/auth/register`, data);
  }

  static async registerByProviders(user: RegisterUserPlatforms) {
    return await axios.post(`${BASE_URL}/api/auth/register-providers`, user);
  }

  static async login(data: LoginUser) {
    const loginRes = await axios.post(`${BASE_URL}/api/auth/login`, {
      email: data.email,
      password: data.password,
    });

    return loginRes;
  }

  static async getBackendTokens(user: RegisterUserPlatforms): Promise<Session> {
    const tokens = await axios.post(`${BASE_URL}/api/auth/get-tokens`, user);

    return tokens.data;
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
