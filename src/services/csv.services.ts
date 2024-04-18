import { BASE_URL, HTTPRequests } from "@/config/axios.config";
import { Product, TeamMember } from "@/types";

export class CsvServices {
  static async bulkCreateProducts(data: Product[]) {
    const response = await HTTPRequests.post(
      `${BASE_URL}/api/products/bulkcreate`,
      data
    );
    return response.data;
  }
  static async bulkCreateTeams(data: TeamMember[]) {
    const response = await HTTPRequests.post(
      `${BASE_URL}/api/members/bulkcreate`,
      data
    );
    return response.data;
  }
}
