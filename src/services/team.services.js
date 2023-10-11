import axios from "axios";
const apiURL = "http://localhost:3001/api";

export class TeamServices {
  static async getAllTeams() {
    const response = await axios.get(`${apiURL}/teams`);
    return response.data;
  }

  static async createTeam(teamData) {
    const response = await axios.post(`${apiURL}/teams`, teamData);
    return response.data;
  }

  static async updateTeam(id, teamData) {
    const response = await axios.put(`${apiURL}/teams/${id}`, teamData);
    return response.data;
  }

  static async deleteTeam(id) {
    const response = await axios.delete(`${apiURL}/teams/${id}`);
    return response.data;
  }

  static async deleteFromTeam(teamId, memberId) {
    return await axios.delete(
      `${apiURL}/teams/deleteMember/${teamId}/${memberId}`
    );
  }

  static async addToTeam(teamId, memberId) {
    return await axios.post(`${apiURL}/teams/addTeam`, { teamId, memberId });
  }
}
