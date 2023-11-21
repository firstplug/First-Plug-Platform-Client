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
    case "MemberDetails":
      return <MemberAsideDetails />;
    case "EditTeam":
      return <EditTeamsAsideDetails />;
    case "NewTeam":
      return <CreateTeamAside />;
    case "EditMember":
      return <MemberEditAside />;
    case "LoadStock":
      return <LoadStock />;
    case "OrderDetails":
      return <OrderAsideDetails />;
  }
});
