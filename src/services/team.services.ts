import { Team } from "@/types";
import { BASE_URL, HTTPRequests } from "@/config/axios.config";

type TeamCreation = Omit<Team, "_id" | "__v">;

export class TeamServices {
  static async getAllTeams(): Promise<Team[]> {
    const response = await HTTPRequests.get(`${BASE_URL}/api/teams`);
    return response.data;
  }

  static async createTeam(): Promise<Team[]> {
    const response = await HTTPRequests.get(`${BASE_URL}/api/teams`);
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
