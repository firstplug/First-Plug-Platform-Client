import { baseApi } from "../config/configAxios";

export class AuthServices {
  static async register(data) {
    return await baseApi.post("/auth/register", data);
  }

  static async login(data) {
    const user = await baseApi.post("/auth/login", data);
    return user.data;
  }

  static async me(token) {
    const user = await baseApi.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return user.data.payload;
  }
}
