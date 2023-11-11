import { Instance, types } from "mobx-state-tree";
import { TeamMemberModel } from "./member.store";

export const TeamModel = types.model({
  _id: types.string,
  name: types.optional(types.string, ""),
  teamMembers: types.optional(types.array(TeamMemberModel), []),
});

export type Team = Instance<typeof TeamModel>

export const TeamStore = types
  .model({
    teams: types.array(TeamModel),
  })
  .actions((store) => ({
    setTeams(teams) {
      store.teams = teams;
    },

    addTeam(team) {
      store.teams.push(team);
    },
  }));
