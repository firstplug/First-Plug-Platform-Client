import { baseApi } from "../config/configAxios";

export class TeamServices {
  static async getAllTeams() {
    const response = await baseApi.get(`/teams`);
    return response.data;
  }

  static async createTeam(teamData) {
    const response = await baseApi.post(`/teams`, teamData);
    return response.data;
  }

  static async updateTeam(id, teamData) {
    const response = await baseApi.put(`/teams/${id}`, teamData);
    return response.data;
  }

  static async deleteTeam(id) {
    const response = await baseApi.delete(`/teams/${id}`);
    return response.data;
  }

  static async deleteFromTeam(teamId, memberId) {
    return await baseApi.delete(`/teams/deleteMember/${teamId}/${memberId}`);
  }

  static async addToTeam(teamId, memberId) {
    return await baseApi.post(`/teams/addTeam`, { teamId, memberId });
  }
}
