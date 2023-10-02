import axios from "axios";

export class AuthServices {
  static async register(data) {
    const userData = await axios.post(
      "http://localhost:3001/api/auth/register",
      data
    );

    return userData.data;
  }
}
