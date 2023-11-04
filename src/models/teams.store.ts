import { Instance, types } from "mobx-state-tree";
import { TeamMember } from "./member.store";

const Team = types.model({
  _id: types.string,
  name: types.optional(types.string, ""),
  teamMembers: types.optional(types.array(TeamMember), []),
});

export type Team = Instance<typeof Team>

export const TeamStore = types
  .model({
    teams: types.array(Team),
  })
  .actions((store) => ({
    setTeams(teams) {
      store.teams = teams;
    },

    addTeam(team) {
      store.teams.push(team);
    },
  }));
