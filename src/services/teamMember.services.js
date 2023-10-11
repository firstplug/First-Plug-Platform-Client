import axios from "axios";

const apiURL = "http://localhost:3001/api/teamMembers";

export class TeamMemberServices {
  static async getAllMembers() {
    return await axios.get(`${apiURL}`);
  }
  static async getOneMember(id) {
    return await axios.get(`${apiURL}/${id}`);
  }

  static async createMember(data) {
    return await axios.post(`${apiURL}`, data);
  }
  static async updateMember(id, data) {
    return await axios.put(`${apiURL}/${id}`, data);
  }
  static async deleteMember(id) {
    return await axios.delete(`${apiURL}/${id}`);
  }
}
