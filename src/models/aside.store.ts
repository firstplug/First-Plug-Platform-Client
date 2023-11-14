import { AsideType, ASIDE_TYPES } from "@/types";
import { types } from "mobx-state-tree";

//TODO : Delete 'isOpen' prop .The existence of type indicates if the aside is open or not.
type Maybe<T> = T | undefined;
export const AsideStore = types
  .model({
    type: types.maybe(types.enumeration(ASIDE_TYPES)),
    isOpen: types.optional(types.boolean, false),
  })
  .actions((store) => ({
    setAside(type: Maybe<AsideType>) {
      store.type = type;
    },
    openAside() {
      store.isOpen = true;
    },
    closeAside() {
      store.isOpen = false;
    },
  }));
