"use client";
import { createContext, useContext } from "react";
import { types } from "mobx-state-tree";

const Users = types.model({
  id: types.string,
  fullname: types.string,
  email: types.string,
  companyName: types.optional(types.string, ""),
  country: types.optional(types.string, ""),
  city: types.optional(types.string, ""),
  state: types.optional(types.string, ""),
  zipcode: types.optional(types.string, ""),
  address: types.optional(types.string, ""),
  apartment: types.optional(types.string, ""),
  phone: types.optional(types.string, ""),
  teams: types.optional(types.array(types.string), []),
  shipments: types.optional(types.array(types.string), []),
  orders: types.optional(types.array(types.string), []),
});

export const UsersStore = types
  .model({
    users: types.map(Users),
  })
  .actions((self) => ({
    setUser(user) {
      self.users.data = user;
    },
  }));

export const UsersStoreContext = createContext(UsersStore);

export const useStore = () => useContext(UsersStoreContext);
