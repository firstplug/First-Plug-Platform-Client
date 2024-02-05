import { Team } from "@/types";
import axios from "@/config/axios.config";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

type TeamCreation = Omit<Team, "_id" | "__v">;

export class TeamServices {
  private static getHeaders() {
    const accessToken = sessionStorage.getItem("accessToken");
    return {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
  }
  static async getAllTeams(): Promise<Team[]> {
    const response = await axios.get(
      `${BASE_URL}/api/teams`,
      TeamServices.getHeaders()
    );
    return response.data;
  }

  static async createTeam(): Promise<Team[]> {
    const response = await axios.get(
      `${BASE_URL}/api/teams`,
      TeamServices.getHeaders()
    );
    return response.data;
  }

  static async deleteTeam(_id: string): Promise<Team[]> {
    const response = await axios.get(
      `${BASE_URL}/api/teams`,
      TeamServices.getHeaders()
    );
    return response.data;
  }

  static async addToTeam(team: string, member: string): Promise<Team[]> {
    const response = await axios.get(
      `${BASE_URL}/api/teams`,
      TeamServices.getHeaders()
    );
    return response.data;
  }

  static async deleteFromTeam(team: string, member: string): Promise<Team[]> {
    const response = await axios.get(
      `${BASE_URL}/api/teams`,
      TeamServices.getHeaders()
    );
    return response.data;
  }
}
