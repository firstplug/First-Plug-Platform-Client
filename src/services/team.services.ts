import { Team } from "@/types";
import { BASE_URL, HTTPRequests } from "@/config/axios.config";

type TeamCreation = { name: string };

export class TeamServices {
  static async getAllTeams(): Promise<Team[]> {
    const response = await HTTPRequests.get(`${BASE_URL}/api/teams`);
    return response.data;
  }

  static async createTeam(team: TeamCreation): Promise<Team> {
    const response = await HTTPRequests.post(`${BASE_URL}/api/teams`, team);
    return response.data;
  }

  static async deleteTeam(_id: string): Promise<Team[]> {
    const response = await HTTPRequests.get(`${BASE_URL}/api/teams`);
    return response.data;
  }

  static async addToTeam(team: string, member: string): Promise<Team[]> {
    const response = await HTTPRequests.get(`${BASE_URL}/api/teams`);
    return response.data;
  }

  static async deleteFromTeam(team: string, member: string): Promise<Team[]> {
    const response = await HTTPRequests.get(`${BASE_URL}/api/teams`);
    return response.data;
  }
}
