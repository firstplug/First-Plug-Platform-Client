"use client";
import { useStore } from "@/models/root.store";
import { observer } from "mobx-react-lite";
import {
  MemberAsideDetails,
  CreateTeamAside,
  MemberEditAside,
  LoadAside,
  OrderAsideDetails,
  EditTeamsAsideDetails,
} from "./";
import { AssignProduct, EditProductAside } from "./AsideContents";

export var AsideContent = observer(function () {
  const { aside } = useStore();
  switch (aside.type) {
    case "MemberDetails":
      return <MemberAsideDetails />;
    case "EditTeam":
      return <EditTeamsAsideDetails />;
    case "NewTeam":
      return <CreateTeamAside />;
    case "AssingProduct":
      return <AssignProduct />;
    case "ReassingProduct":
      return <AssignProduct />;
    case "EditMember":
      return <MemberEditAside />;
    case "LoadStock":
      return <LoadAside />;
    case "LoadMembers":
      return <LoadAside />;
    case "OrderDetails":
      return <OrderAsideDetails />;
    case "EditProduct":
      return <EditProductAside />;
  }
});
