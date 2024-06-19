import { useStore } from "@/models";
import { Memberservices, ProductServices } from "@/services";

export default function useFetch() {
  const {
    members: { setMembers, setFetchMembers },
    products: { setTable, setFetchStock },
  } = useStore();

  const fetchMembers = async () => {
    setFetchMembers(true);
    const response = await Memberservices.getAllMembers();
    setMembers(response);
    setFetchMembers(false);
  };
  const fetchStock = async () => {
    try {
      setFetchStock(true);
      const response = await ProductServices.getTableFormat();
      setTable(response);
      setFetchStock(false);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return { fetchMembers, fetchStock };
}
