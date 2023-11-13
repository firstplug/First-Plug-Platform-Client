import { Instance, types } from "mobx-state-tree";
import { TeamMemberModel } from "./member";

export const TeamModel = types.model({
  _id: types.string,
  name: types.optional(types.string, ""),
  teamMembers: types.optional(types.array(TeamMemberModel), []),
});

export type Team = Instance<typeof TeamModel>;
