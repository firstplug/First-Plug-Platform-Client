import { types } from "mobx-state-tree";
import { TeamModel, Team } from "@/types";

export const TeamStore = types
  .model({
    teams: types.array(TeamModel),
  })
  .actions((store) => ({
    setTeams(teams: Team[]) {
      store.teams.push(...teams);
    },

    addTeam(team: Team) {
      store.teams.push(team);
    },
  }));
