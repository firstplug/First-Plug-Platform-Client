import { LoginUser, RegisterUser } from "@/types";
import axios from "axios";
import { JWT } from "next-auth/jwt";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export class AuthServices {
  static async register(data: RegisterUser) {
    return await axios.post(`${BASE_URL}/api/auth/register`, data);
  }

  static async login(data: LoginUser) {
    return await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  static async refreshToken(token: JWT): Promise<JWT> {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/auth/refresh",
      {
        method: "POST",
        headers: {
          authorization: `Refresh ${token.backendTokens.refreshToken}`,
        },
      }
    );

    const response = await res.json();

    return { ...token, backendTokens: response };
  }
}
