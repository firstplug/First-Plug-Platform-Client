import axios from "axios";

export class AuthServices {
  static apiURL = "http://localhost:3001";
  static async register(data) {
    const userData = await axios.post(`${apiURL}/api/auth/register`, data);

    return userData.data;
  }

  static async login(data) {
    const userData = await axios.post(`${apiURL}/api/auth/login`, data);

    return userData.data;
  }
}
