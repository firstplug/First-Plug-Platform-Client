import { Instance, types } from "mobx-state-tree";

export const TeamMember = types.model({
  _id: types.optional(types.string, ""),
  firstName: types.optional(types.string, ""),
  img: types.optional(types.string, ""),
  lastName: types.optional(types.string, ""),
  dateOfBirth: types.optional(types.string, ""),
  phone: types.optional(types.string, ""),
  email: types.optional(types.string, ""),
  jobPosition: types.optional(types.string, ""),
  city: types.optional(types.string, ""),
  zipCode: types.optional(types.string, ""),
  address: types.optional(types.string, ""),
  appartment: types.optional(types.string, ""),
  joiningDate: types.optional(types.string, ""),
  timeSlotForDelivery: types.optional(types.string, ""),
  additionalInfo: types.optional(types.string, ""),
  teams: types.optional(types.array(types.string), []),
});

export type TeamMember = Instance<typeof TeamMember>;

export const MemberStore = types
  .model({
    members: types.array(TeamMember),
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
