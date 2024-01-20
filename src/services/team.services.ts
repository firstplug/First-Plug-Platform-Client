import { TeamMember, Team } from "@/types";
import axios, { AxiosResponse } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

type TeamCreation = Omit<Team, "_id" | "__v">;

export class TeamServices {
  static async getAllTeams(): Promise<Team[]> {
    const response: AxiosResponse = await axios.get(`${BASE_URL}/api/teams`);
    return response.data;
  }

  static async createTeam(teamData: TeamCreation): Promise<Team> {
    const response: AxiosResponse = await axios.post(
      `${BASE_URL}/api/teams`,
      teamData
    );
    return response.data;
  }

  static async updateTeam(
    id: Team["_id"],
    teamData: TeamCreation
  ): Promise<Team> {
    const response: AxiosResponse = await axios.put(
      `${BASE_URL}/api/teams/${id}`,
      teamData
    );
    return response.data;
  }

  static async deleteTeam(id: Team["_id"]): Promise<Team> {
    const response: AxiosResponse = await axios.delete(
      `${BASE_URL}/api/teams/${id}`
    );
    return response.data;
  }

  static async deleteFromTeam(
    teamId: Team["_id"],
    memberId: TeamMember["_id"]
  ): Promise<Team> {
    return await axios.delete(
      `${BASE_URL}/api/teams/deleteMember/${teamId}/${memberId}`
    );
  }

  static async addToTeam(
    teamId: Team["_id"],
    memberId: TeamMember["_id"]
  ): Promise<Team> {
    const response: AxiosResponse = await axios.post(
      `${BASE_URL}/api/teams/addTeam`,
      {
        teamId,
        memberId,
      }
    );
    return response.data;
  }
}
