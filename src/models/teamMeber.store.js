"use client";
import { createContext, useContext } from "react";
import { types, flow } from "mobx-state-tree";
import { TeamMemberServices } from "@/services/teamMember.services";

const TeamMember = types.model({
  _id: types.string,
  firstName: types.string,
  lastName: types.string,
  dateOfBirth: types.string,
  phone: types.string,
  email: types.string,
  jobPosition: types.string,
  city: types.string,
  zipCode: types.string,
  address: types.string,
  appartment: types.string,
  joiningDate: types.string,
  timeSlotForDelivery: types.string,
  additionalInfo: types.optional(types.string, ""),
  teams: types.optional(types.array(types.string), []),
});

export const TeamMemberStore = types
  .model({
    members: types.array(TeamMember),
  })
  .actions((store) => ({
    setMembers(members) {
      store.members = members;
    },

    addMember(member) {
      store.members = [...store.members, member];
    },
  }));

export const TeamMemberContext = createContext(TeamMemberStore);
export const useTeamMemberStore = () => useContext(TeamMemberContext);
