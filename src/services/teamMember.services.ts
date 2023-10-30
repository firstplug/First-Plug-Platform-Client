import axios, { AxiosResponse } from "axios";

const apiURL = "http://localhost:3001/api/teamMembers";

export class TeamMemberServices {
  static async getAllMembers(): Promise<any> {
    const response: AxiosResponse = await axios.get(`${apiURL}`);
    return response.data;
  }

  static async getOneMember(id: string): Promise<any> {
    const response: AxiosResponse = await axios.get(`${apiURL}/${id}`);
    return response.data;
  }

  static async createMember(data: any): Promise<any> {
    const response: AxiosResponse = await axios.post(`${apiURL}`, data);
    return response.data;
  }

  static async updateMember(id: string, data: any): Promise<any> {
    const response: AxiosResponse = await axios.put(`${apiURL}/${id}`, data);
    return response.data;
  }

  static async deleteMember(id: string): Promise<any> {
    const response: AxiosResponse = await axios.delete(`${apiURL}/${id}`);
    return response.data;
  }
}