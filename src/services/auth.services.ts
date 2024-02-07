import { HTTPRequests } from "@/config/axios.config";
import { LoginUser, RegisterUser } from "@/types";
import axios from "axios";
import { JWT } from "next-auth/jwt";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export class AuthServices {
  static async register(data: RegisterUser) {
    return await axios.post(`${BASE_URL}/api/auth/register`, data);
  }

  static async login(data: LoginUser) {
    return await HTTPRequests.post(`${BASE_URL}/api/auth/login`, data);
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
