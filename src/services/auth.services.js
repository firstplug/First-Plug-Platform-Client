import axios from "axios";

const apiURL = "http://localhost:3001";

export class AuthServices {
  static async register(data) {
    const userData = await axios.post(`${apiURL}/api/auth/register`, data);
    return userData.data;
  }

  static async login(data) {
    const userData = await axios.post(`${apiURL}/api/auth/login`, data);
    return userData.data;
  }

  static async me() {
    const userData = await axios.get(`${apiURL}/api/auth/login`);
    return userData.data;
  }
}
