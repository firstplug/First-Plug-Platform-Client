import { types } from "mobx-state-tree";

const AsideStoreTypes = [
  "editTeam",
  "editMember",
  "loadStock",
  "newTeam",
  "memberDetails",
  "orderDetails",
]; // as const

export const AsideStore = types
  .model({
    type: types.maybe(types.enumeration(AsideStoreTypes)),
    isOpen: types.optional(types.boolean, false),
  })
  .actions((store) => ({
    setAside(type) {
      store.type = type;
    },
    openAside() {
      store.isOpen = true;
    },
    closeAside() {
      store.isOpen = false;
    },
  }));
