import axios, { AxiosResponse } from "axios";
const apiURL = "http://localhost:3001/api";

export class TeamServices {
  static async getAllTeams(): Promise<any> {
    const response: AxiosResponse = await axios.get(`${apiURL}/teams`);
    return response.data;
  }

  static async createTeam(teamData: any): Promise<any>  {
    const response: AxiosResponse = await axios.post(`${apiURL}/teams`, teamData);
    return response.data;
  }

  static async updateTeam(id: string, teamData: any): Promise<any>  {
    const response: AxiosResponse = await axios.put(`${apiURL}/teams/${id}`, teamData);
    return response.data;
  }

  static async deleteTeam(id: string): Promise<any>  {
    const response: AxiosResponse = await axios.delete(`${apiURL}/teams/${id}`);
    return response.data;
  }

  static async deleteFromTeam(teamId: string, memberId: string): Promise<any>  {
    return await axios.delete(
      `${apiURL}/teams/deleteMember/${teamId}/${memberId}`
    );
  }

  static async addToTeam(teamId: string, memberId: string): Promise<any> {
    const response: AxiosResponse = await axios.post(`${apiURL}/teams/addTeam`, {
      teamId,
      memberId,
    });
    return response.data;
  }
}
