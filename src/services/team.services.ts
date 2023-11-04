import axios, { AxiosResponse } from "axios";
const apiURL = "http://localhost:3001/api";

type TeamMember = {
  _id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  phone: string;
  email: string;
  jobPosition: string;
  city: string;
  zipCode: string;
  address: string;
  appartment: string;
  joiningDate: Date;
  timeSlotForDelivery: string;
  additionalInfo: string;
  teams: string[];
  __v: number;
};

type Team = {
  _id: string;
  name: string;
  teamMember: TeamMember[];
  __v: number;
};

type createTeam = Omit<Omit<Team, "_id">, "__v">;

export class TeamServices {
  static async getAllTeams(): Promise<Team[]> {
    const response: AxiosResponse = await axios.get(`${apiURL}/teams`);
    return response.data;
  }

  static async createTeam(teamData: createTeam): Promise<Team>  {
    const response: AxiosResponse = await axios.post(`${apiURL}/teams`, teamData);
    return response.data;
  }

  static async updateTeam(id: Team["_id"], teamData: createTeam): Promise<Team>  {
    const response: AxiosResponse = await axios.put(`${apiURL}/teams/${id}`, teamData);
    return response.data;
  }

  static async deleteTeam(id: Team["_id"]): Promise<Team>  {
    const response: AxiosResponse = await axios.delete(`${apiURL}/teams/${id}`);
    return response.data;
  }

  static async deleteFromTeam(teamId: Team["_id"], memberId: string): Promise<Team>  {
    return await axios.delete(
      `${apiURL}/teams/deleteMember/${teamId}/${memberId}`
    );
  }

  static async addToTeam(teamId: Team["_id"], memberId: TeamMember["_id"]): Promise<Team> {
    const response: AxiosResponse = await axios.post(`${apiURL}/teams/addTeam`, {
      teamId,
      memberId,
    });
    return response.data;
  }
}
