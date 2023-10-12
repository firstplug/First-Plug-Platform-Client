"use client";
import { createContext, useContext } from "react";
import { types } from "mobx-state-tree";

const Users = types.model({
  _id: types.string,
  fullname: types.optional(types.string, ""),
  email: types.optional(types.string, ""),
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
const Products = types.model({
  _id: types.string,
  category: types.optional(types.string, ""),
  model: types.optional(types.string, ""),
  color: types.optional(types.string, ""),
  screen: types.optional(types.string, ""),
  keyboard: types.optional(types.string, ""),
  processor: types.optional(types.string, ""),
  ram: types.optional(types.string, ""),
  storage: types.optional(types.string, ""),
  gpu: types.optional(types.string, ""),
  serialNumber: types.optional(types.string, ""),
  price: types.optional(types.string, ""),
  status: types.optional(types.string, ""),
  imgUrl: types.optional(types.string, ""),
  quantity: types.number,
});

const Orders = types.model({
  _id: types.string,
  teamMember: types.optional(types.array(types.string), []),
  status: types.optional(types.string, ""),
  orderDate: types.Date,
  totalPrice: types.optional(types.string, ""),
  products: types.optional(types.array(types.string), []),
});
const TeamMember = types.model({
  _id: types.string,
  firstName: types.optional(types.string, ""),
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
const Teams = types.model({
  _id: types.string,
  name: types.optional(types.string, ""),
  teamMember: types.optional(types.array(TeamMember), []),
});
const Shipments = types.model({
  _id: types.string,
  fullname: types.optional(types.string, ""),
  date: types.Date,
  QuantityProducts: types.optional(types.string, ""),
  types: types.optional(types.string, ""),
  trackingNumber: types.optional(types.string, ""),
  trackingURL: types.optional(types.string, ""),
  price: types.optional(types.string, ""),
  orders: types.optional(types.array(types.string), []),
});

export const RootStore = types
  .model({
    users: types.array(Users),
    members: types.array(TeamMember),
    products: types.array(Products),
    orders: types.array(Orders),
    shipments: types.array(Shipments),
    teams: types.array(Teams),
  })
  .actions((store) => ({
    setUser(user) {
      self.users = user;
    },
    setMembers(members) {
      store.members = members;
    },
    setTeams(teams) {
      store.teams = teams;
    },
    setProducts(products) {
      store.products = products;
    },
    addTeam(team) {
      store.teams = [...store.teams, team];
    },
    addMember(member) {
      store.members = [...store.members, member];
    },
    addProduct(product) {
      store.products = [...store.products, product];
    },
  }));

export const RootStoreContext = createContext(RootStore);
export const useStore = () => useContext(RootStoreContext);
