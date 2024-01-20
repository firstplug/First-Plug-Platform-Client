import { types } from "mobx-state-tree";
import { TeamModel, Team } from "@/types";

export const TeamStore = types
  .model({
    teams: types.array(TeamModel),
  })
  .actions((store) => ({
    //TODO: Check and fix this
    setTeams(teams: Team[]) {
      //store.teams.replace(teams);
    },

    //TODO: Check and fix this
    addTeam(team: Team) {
     // store.teams.push(team);
    },
  }));
