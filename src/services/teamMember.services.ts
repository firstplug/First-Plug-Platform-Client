import axios, { AxiosResponse } from "axios";

const apiURL = "http://localhost:3001/api/teamMembers";

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

type CreationMember = Omit<Omit<TeamMember, "_id">, "__v">;

export class TeamMemberServices {
  static async getAllMembers(): Promise<TeamMember[]> {
    const response: AxiosResponse = await axios.get(`${apiURL}`);
    return response.data;
  }

  static async getOneMember(id: TeamMember["_id"]): Promise<TeamMember> {
    const response: AxiosResponse = await axios.get(`${apiURL}/${id}`);
    return response.data;
  }

  static async createMember(data: CreationMember): Promise<TeamMember> {
    const response: AxiosResponse = await axios.post(`${apiURL}`, data);
    return response.data;
  }

  static async updateMember(id: TeamMember["_id"], data: CreationMember): Promise<TeamMember> {
    const response: AxiosResponse = await axios.put(`${apiURL}/${id}`, data);
    return response.data;
  }

  static async deleteMember(id: TeamMember["_id"]): Promise<TeamMember> {
    const response: AxiosResponse = await axios.delete(`${apiURL}/${id}`);
    return response.data;
  }
}