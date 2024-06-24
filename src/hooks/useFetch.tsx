import { useStore } from "@/models";
import { Memberservices, ProductServices, TeamServices } from "@/services";
import { transformData } from "@/utils/dataTransformUtil";

export default function useFetch() {
  const {
    members: { setMembers, setFetchMembers },
    products: { setTable, setFetchStock },
  } = useStore();

  const fetchMembers = async () => {
    setFetchMembers(true);
    try {
      const membersResponse = await Memberservices.getAllMembers();
      const teamsResponse = await TeamServices.getAllTeams();

      const transformedMembers = transformData(membersResponse, teamsResponse);
      setMembers(transformedMembers);
    } catch (error) {
      console.error("Error fetching members:", error);
    } finally {
      setFetchMembers(false);
    }
  };

  const fetchStock = async () => {
    try {
      setFetchStock(true);
      const response = await ProductServices.getTableFormat();
      setTable(response);
    } catch (error) {
      console.log("Error fetching stock:", error);
    } finally {
      setFetchStock(false);
    }
  };

  return { fetchMembers, fetchStock };
}
