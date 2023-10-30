import axios from "axios";

export class TeamServices {
  static async getAllTeams() {
    const response = await axios.get(
      `${proccess.env.NEXT_PUBLIC_API_URL}/api/teams`
    );
    return response.data;
  }

  static async createTeam(teamData) {
    const response = await axios.post(
      `${proccess.env.NEXT_PUBLIC_API_URL}/api/teams`,
      teamData
    );
    return response.data;
  }

  static async updateTeam(id, teamData) {
    const response = await axios.put(
      `${proccess.env.NEXT_PUBLIC_API_URL}/api/teams/${id}`,
      teamData
    );
    return response.data;
  }

  static async deleteTeam(id) {
    const response = await axios.delete(
      `${proccess.env.NEXT_PUBLIC_API_URL}/api/teams/${id}`
    );
    return response.data;
  }

  static async deleteFromTeam(teamId, memberId) {
    return await axios.delete(
      `${proccess.env.NEXT_PUBLIC_API_URL}/api/teams/deleteMember/${teamId}/${memberId}`
    );
  }

  static async addToTeam(teamId, memberId) {
    return await axios.post(
      `${proccess.env.NEXT_PUBLIC_API_URL}/api/teams/addTeam`,
      { teamId, memberId }
    );
  }
}
