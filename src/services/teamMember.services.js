import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export class TeamMemberServices {
  static async getAllMembers() {
    return await axios.get(`${BASE_URL}/api/teamMembers`);
  }
  static async getOneMember(id) {
    return await axios.get(`${BASE_URL}/api/teamMembers/${id}`);
  }

  static async createMember(data) {
    return await axios.post(`${BASE_URL}/api/teamMembers`, data);
  }
  static async updateMember(id, data) {
    return await axios.put(`${BASE_URL}/api/teamMembers/${id}`, data);
  }
  static async deleteMember(id) {
    return await axios.delete(`${BASE_URL}/api/teamMembers/${id}`);
  }
}
