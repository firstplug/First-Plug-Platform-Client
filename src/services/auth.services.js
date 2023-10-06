import axios from "axios";

const apiURL = "http://localhost:3001";

export class AuthServices {
  static async register(data) {
    return await axios.post(`${apiURL}/api/auth/register`, data);
  }

  static async login(data) {
    const user = await axios.post(`${apiURL}/api/auth/login`, data);
    return user.data;
  }

  static async me(token) {
    const user = await axios.get(`${apiURL}/api/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return user.data.payload;
  }
}
