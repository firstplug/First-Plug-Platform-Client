import { types } from "mobx-state-tree";
import { User, UserModel } from "@/types";

export const UserStore = types
  .model({
    users: types.array(UserModel),
  })
  .actions((store) => ({
    setUser(teams: User[]) {
      store.users.replace(teams);
    },

    addTeam(team: User) {
      store.users.push(team);
    },
  }));
