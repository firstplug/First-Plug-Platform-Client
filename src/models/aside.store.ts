import { AsideType, ASIDE_TYPES } from "@/types";
import { types } from "mobx-state-tree";

type Maybe<T> = T | undefined;
export const AsideStore = types
  .model({
    type: types.maybe(types.enumeration(ASIDE_TYPES)),
  })
  .actions((store) => ({
    setAside(type: Maybe<AsideType>) {
      store.type = type;
    },
  }));
