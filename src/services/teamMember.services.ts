import axios, { AxiosResponse } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

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
    const response: AxiosResponse = await axios.get(
      `${BASE_URL}/api/teamMembers`
    );
    return response.data;
  }

  static async getOneMember(id: TeamMember["_id"]): Promise<TeamMember> {
    const response: AxiosResponse = await axios.get(
      `${BASE_URL}/api/teamMembers/${id}`
    );
    return response.data;
  }

  static async createMember(data: CreationMember): Promise<TeamMember> {
    const response: AxiosResponse = await axios.post(
      `${BASE_URL}/api/teamMembers`,
      data
    );
    return response.data;
  }

  static async updateMember(
    id: TeamMember["_id"],
    data: CreationMember
  ): Promise<TeamMember> {
    const response: AxiosResponse = await axios.put(
      `${BASE_URL}/api/teamMembers/${id}`,
      data
    );
    return response.data;
  }

  static async deleteMember(id: TeamMember["_id"]): Promise<TeamMember> {
    const response: AxiosResponse = await axios.delete(
      `${BASE_URL}/api/teamMembers/${id}`
    );
    return response.data;
  }
}
