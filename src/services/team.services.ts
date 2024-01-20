import { Team } from "@/types";
import axios, { AxiosResponse } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

type TeamCreation = Omit<Team, "_id" | "__v">;

export class TeamServices {
  static async getAllTeams(): Promise<Team[]> {
    const response: AxiosResponse = await axios.get(`${BASE_URL}/api/teams`);
    return response.data;    
  }

  static async createTeam(): Promise<Team[]> {
    // TODO: make createTeam request 
    const response: AxiosResponse = await axios.get(`${BASE_URL}/api/teams`);
    return response.data;    
  }

  static async deleteTeam(_id: string): Promise<Team[]> {
    // TODO: make deleteTeam request 
    const response: AxiosResponse = await axios.get(`${BASE_URL}/api/teams`);
    return response.data;    
  }

  static async addToTeam(team: string, member:string): Promise<Team[]> {
    // TODO: make addToTeam request 
    const response: AxiosResponse = await axios.get(`${BASE_URL}/api/teams`);
    return response.data;    
  }

  static async deleteFromTeam(team: string, member: string): Promise<Team[]> {
    // TODO: make deleteFromTeam request 
    const response: AxiosResponse = await axios.get(`${BASE_URL}/api/teams`);
    return response.data;    
  }

}


