import { types } from "mobx-state-tree";
import { TeamMemberModel, TeamMember } from "@/types";

export const MemberStore = types
  .model({
    members: types.array(TeamMemberModel),
    memberSelected: types.optional(types.string, ""),
  })
  .views((store) => ({
    get memberCount() {
      return store.members.length;
    },

    get selectedMember() {
      return store.members.find(
        (member) => member._id === store.memberSelected
      );
    },
  }))
  .actions((store) => ({
    setMembers(members) {
      store.members = members;
    },
    addMember(member: TeamMember) {
      store.members.push(member);
    },
    setSelectedMember(memberId: string) {
      store.memberSelected = memberId;
    },
  }));
