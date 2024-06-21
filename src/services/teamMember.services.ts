import { TeamMember, Team } from "@/types";
import { BASE_URL, HTTPRequests } from "@/config/axios.config";

type CreationMember = Omit<Omit<TeamMember, "_id">, "__v">;

export class Memberservices {
  static async getAllMembers(): Promise<{
    members: TeamMember[];
    teams: Team[];
  }> {
    const membersResponse = await HTTPRequests.get(`${BASE_URL}/api/members`);
    const teamsResponse = await HTTPRequests.get(`${BASE_URL}/api/teams`);
    return {
      members: membersResponse.data,
      teams: teamsResponse.data,
    };
  }

  static async getOneMember(id: TeamMember["_id"]): Promise<TeamMember> {
    const response = await HTTPRequests.get(`${BASE_URL}/api/members/${id}`);
    return response.data;
  }

  static async createMember(data: CreationMember): Promise<TeamMember> {
    const response = await HTTPRequests.post(`${BASE_URL}/api/members`, data);
    return response.data;
  }

  static async updateMember(
    id: TeamMember["_id"],
    data: Partial<CreationMember>
  ): Promise<TeamMember> {
    const response = await HTTPRequests.patch(
      `${BASE_URL}/api/members/${id}`,
      data
    );
    return response.data;
  }

  static async deleteMember(id: TeamMember["_id"]): Promise<TeamMember> {
    const response = await HTTPRequests.delete(`${BASE_URL}/api/members/${id}`);
    return response.data;
  }

  static async getAllMembersByTeam(teamId: string): Promise<TeamMember[]> {
    const response = await HTTPRequests.get(
      `${BASE_URL}/api/members/team/${teamId}`
    );
    return response.data;
  }
}
