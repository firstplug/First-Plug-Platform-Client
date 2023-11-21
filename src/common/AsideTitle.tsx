import { useStore } from "@/models/root.store";
import { observer } from "mobx-react-lite";

export const AsideTitle = observer(function AsideTitle() {
  const { aside, orders, members } = useStore();
  switch (aside.type) {
    case "MemberDetails":
      return `Team Member #${members.selectedMember._id.slice(0, 5)}`;
    case "EditMember":
      return "Edit Teams";
    case "NewTeam":
      return "New Team";
    case "EditTeam":
      return `Team Member #${members.selectedMember._id.slice(0, 5)}`;
    case "LoadStock":
      return "Load Stock";
    case "OrderDetails":
      return `ID Number # ${orders.selectedOrder._id.slice(0, 5)}`;
  }
});
