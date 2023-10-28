import { baseApi } from "../config/configAxios";

export class TeamMemberServices {
  static async getAllMembers() {
    return await baseApi.get(`/teamMembers`);
  }
  static async getOneMember(id) {
    return await baseApi.get(`/teamMembers/${id}`);
  }

  static async createMember(data) {
    return await baseApi.post(`/teamMembers`, data);
  }
  static async updateMember(id, data) {
    return await baseApi.put(`/teamMembers/${id}`, data);
  }
  static async deleteMember(id) {
    return await baseApi.delete(`/teamMembers/${id}`);
  }
}
