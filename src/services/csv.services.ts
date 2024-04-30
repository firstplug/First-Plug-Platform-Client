import { BASE_URL, HTTPRequests } from "@/config/axios.config";
import { MembersModel, PrdouctModel } from "@/types";

export class CsvServices {
  static async bulkCreateProducts(data: PrdouctModel[]) {
    const response = await HTTPRequests.post(
      `${BASE_URL}/api/products/bulkcreate`,
      data
    );
    return response.data;
  }
  static async bulkCreateTeams(data: MembersModel[]) {
    const response = await HTTPRequests.post(
      `${BASE_URL}/api/members/bulkcreate`,
      data
    );
    return response.data;
  }
}
