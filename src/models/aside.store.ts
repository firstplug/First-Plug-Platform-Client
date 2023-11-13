import { AsideType, ASIDE_TYPES } from "@/types/aside";
import { types } from "mobx-state-tree";

export const AsideStore = types
  .model({
    type: types.maybe(types.enumeration(ASIDE_TYPES)),
    isOpen: types.optional(types.boolean, false),
  })
  .actions((store) => ({
    setAside(type: AsideType) {
      store.type = type;
    },
    openAside() {
      store.isOpen = true;
    },
    closeAside() {
      store.isOpen = false;
    },
  }));
