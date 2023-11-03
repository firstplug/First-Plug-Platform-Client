import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export class AuthServices {
  static async register(data) {
    return await axios.post(`${BASE_URL}/api/auth/register`, data);
  }

  static async login(data) {
    const user = await axios.post(`${BASE_URL}/api/auth/login`, data);
    return user.data;
  }

  static async me(token) {
    const user = await axios.get(`${BASE_URL}/api/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return user.data.payload;
  }
}
