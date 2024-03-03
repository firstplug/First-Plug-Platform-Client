import { Instance, types } from "mobx-state-tree";

export const TeamModel = types.array(types.string);

export type Team = Instance<typeof TeamModel>;
