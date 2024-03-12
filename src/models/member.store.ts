import { types } from "mobx-state-tree";
import { TeamMemberModel, TeamMember } from "@/types";

export const MemberStore = types
  .model({
    members: types.array(TeamMemberModel),
    memberId: types.optional(types.string, ""),
    teamFilterItems: types.array(types.string),
  })
  .views((store) => ({
    get memberCount() {
      return store.members.length;
    },

    get selectedMember() {
      return store.members.find((member) => member._id === store.memberId);
    },
    get filterMembersByTeam() {
      if (!store.teamFilterItems.length) return store.members;

      return store.members.filter(({ teams }) =>
        store.teamFilterItems.some((value) => teams.includes(value.toString()))
      );
    },
  }))
  .actions((store) => ({
    setMembers(members: TeamMember[]) {
      store.members.replace(members);
    },
    setFilter(filterTeams: string[]) {
      store.teamFilterItems.replace(filterTeams);
    },
    addMember(member: TeamMember) {
      store.members.push(member);
    },
    setSelectedMember(memberId: string) {
      store.memberId = memberId;
    },
  }));
