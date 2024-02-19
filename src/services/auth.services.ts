import { LoginUser, RegisterUser } from "@/types";
import axios from "axios";
import { JWT } from "next-auth/jwt";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export class AuthServices {
  static async register(data: RegisterUser) {
    return await axios.post(`${BASE_URL}/api/auth/register`, data);
  }

  static async login(data: LoginUser) {
    const loginRes = await axios.post(`${BASE_URL}/api/auth/login`, data);
    //TODO: En "loginRes.data.backendTokens.accessToken" estoy recibiendo el token que tengo que enviar por headers.
    //  Por alguna razon no es el mismo que se está mandande en "/home/layout.tsx"

    // El valor que se guarda en "session.data.backendTokens.accessToken" NO ES IGUAL A ¨loginRes.data.backendTokens.accessToken¨
    console.log("accessToken OK ==> ", loginRes);
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
