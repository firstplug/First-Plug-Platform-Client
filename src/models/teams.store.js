"use client";
import { createContext, useContext } from "react";
import { types } from "mobx-state-tree";

const Teams = types.model({
  _id: types.string,
  name: types.string,
  teamMember: types.optional(
    types.array(
      types.model({
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
      })
    ),
    []
  ),
});

export const TeamStore = types
  .model({
    teams: types.array(Teams),
  })
  .actions((store) => ({
    setTeams(teams) {
      store.teams = teams;
    },

    addTeam(team) {
      store.teams = [...store.teams, team];
    },
  }));

export const TeamsContext = createContext(TeamStore);
export const useTeamStore = () => useContext(TeamsContext);
