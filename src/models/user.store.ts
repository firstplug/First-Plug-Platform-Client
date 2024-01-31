import { types } from "mobx-state-tree";
import { User, UserModel } from "@/types";

export const UserStore = types
  .model({
    user: types.maybe(UserModel),
  })
  .actions((store) => ({
    setUser(user: User) {
      store.user = user;
    },
  }));
