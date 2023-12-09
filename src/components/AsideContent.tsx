"use client";
import { useStore } from "@/models/root.store";
import { observer } from "mobx-react-lite";
import {
  MemberAsideDetails,
  CreateTeamAside,
  MemberEditAside,
  LoadStock,
  OrderAsideDetails,
  EditTeamsAsideDetails,
} from "./";

export const AsideContent = observer(function () {
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
