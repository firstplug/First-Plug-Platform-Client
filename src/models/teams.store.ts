import { types } from "mobx-state-tree";
import { TeamModel, Team } from "@/types";

export const TeamStore = types
  .model({
    teams: types.array(TeamModel),
  })
  .actions((store) => ({
    setTeams(teams) {
      store.teams = teams;
    },

    addTeam(team: Team) {
      store.teams.push(team);
    },
  }));
