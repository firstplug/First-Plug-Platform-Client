import { TeamMember } from "./member.store";

const { types } = require("mobx-state-tree");

const Teams = types.model({
  _id: types.string,
  name: types.optional(types.string, ""),
  teamMember: types.optional(types.array(TeamMember), []),
});

export const TeamStore = types
  .model({
    teams: types.array(Teams),
  })
  .actions((store) => ({
    setTeams(teams) {
      store.teams = teams;
    },

    addTeam(team) {
      store.teams = [...store.teams, team];
    },
  }));
