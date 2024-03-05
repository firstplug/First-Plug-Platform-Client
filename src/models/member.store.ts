import { types } from "mobx-state-tree";
import { TeamMemberModel, TeamMember, TeamMemberTable } from "@/types";

export const MemberStore = types
  .model({
    members: types.array(TeamMemberModel),
    memberId: types.optional(types.string, ""),
  })
  .views((store) => ({
    get membersTable(): TeamMemberTable[] {
      return store.members.map((member) => ({
        _id: member._id,
        fullName: `${member.firstName}, ${member.lastName}`,
        dateOfBirth: member.dateOfBirth,
        jobPosition: member.jobPosition,
        joiningDate: member.joiningDate,
        shipmentDetails: "Complete",
        teams: member.teams,
      }));
    },
    get memberCount() {
      return store.members.length;
    },

    get selectedMember() {
      return store.members.find((member) => member._id === store.memberId);
    },
    membersByTeam(team: string) {
      return store.members.filter((member) => member.teams.includes(team));
    },
  }))
  .actions((store) => ({
    setMembers(members: TeamMember[]) {
      store.members.replace(members);
    },
    addMember(member: TeamMember) {
      store.members.push(member);
    },
    setSelectedMember(memberId: string) {
      store.memberId = memberId;
    },
  }));
