"use client";
import { useStore } from "@/models/root.store";
import { observer } from "mobx-react-lite";

export const AsideTitle = observer(function AsideTitle() {
  const { aside, orders, members } = useStore();
  switch (aside.type) {
    case "MemberDetails":
      return `Team Member Details `;
    case "EditMember":
      return "Edit Teams";
    case "AssingProduct":
      return "Assign To";
    case "ReassingProduct":
      return "Assign To";
    case "NewTeam":
      return "New Team";
    case "EditTeam":
      return `Edit Team Member`;
    case "LoadStock":
      return "Load Stock";
    case "LoadMembers":
      return "Load Members";
    case "OrderDetails":
      return `Order Detail `;
  }
});
