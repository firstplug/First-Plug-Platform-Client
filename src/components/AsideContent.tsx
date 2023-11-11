import { useStore } from "@/models/root.store";
import { observer } from "mobx-react-lite";
import MemberAsideDetails from "./MemberAsideDetails";
import EditTeamsAsideDetails from "./EditTeamsAsideDetails";
import MemberEditAside from "./MemberEditAside";
import CreateTeamAside from "./CreateTeamAside";
import LoadStock from "./LoadStock";
import OrderAsideDetails from "./OrderAsideDetails";

export default observer(function AsideContent() {
  const { aside } = useStore();
  switch (aside.type) {
    case "memberDetails":
      return <MemberAsideDetails />;
    case "editTeam":
      return <EditTeamsAsideDetails />;
    case "newTeam":
      return <CreateTeamAside />;
    case "editMember":
      return <MemberEditAside />;
    case "loadStock":
      return <LoadStock />;
    case "orderDetails":
      return <OrderAsideDetails />;
  }
});
