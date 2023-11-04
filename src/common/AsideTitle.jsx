import { useStore } from "@/models/root.store";
import { observer } from "mobx-react-lite";
import React from "react";

export default observer(function AsideTitle() {
  const { aside, orders, members } = useStore();
  switch (aside.type) {
    case "memberDetails":
      return `Team Member #${members.selectedMember._id.slice(0, 5)}`;
    case "editTeam":
      return "Edit Teams";
    case "newTeam":
      return "New Team";
    case "editMember":
      return `Team Member #${members.selectedMember._id.slice(0, 5)}`;
    case "loadStock":
      return "Load Stock";
    case "loadMembers":
      return "Load Team Members";
    case "orderDetails":
      return `ID Number # ${orders.selectedOrder._id.slice(0, 5)}`;
  }
});
