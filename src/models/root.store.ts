"use client";
import { createContext, useContext } from "react";
import { types, Instance, SnapshotOut } from "mobx-state-tree";


const User = types.model({
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

const Product = types.model({
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

const Order = types.model({
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

const Team = types.model({
  _id: types.string,
  name: types.optional(types.string, ""),
  teamMember: types.optional(types.array(TeamMember), []),
});

const Shipment = types.model({
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

type UserType = Instance<typeof User>;
type ProductType = Instance<typeof Product>;
export type TeamMemberType = Instance<typeof TeamMember>;
type TeamType = Instance<typeof Team>;
type ShipmentType = Instance<typeof Shipment>;
type OrderType = Instance<typeof Order>;

export const RootStore = types
  .model({
    users: types.array(User),
    members: types.array(TeamMember),
    products: types.array(Product),
    orders: types.array(Order),
    shipments: types.array(Shipment),
    teams: types.array(Team),
  })
  .actions((store) => ({
    setUser(user: UserType[]) {
      store.users.replace(user);
    },
    setMembers(member: TeamMemberType[]) {
      store.members.replace(member);
    },
    setTeams(teams: TeamType[]) {
      store.teams.replace(teams);
    },
    setProducts(products: ProductType[]) {
      store.products.replace(products);
    },
    addTeam(team: TeamType[]) {
      store.teams.push(...team)
    },
    addMember(member: TeamMemberType[]) {
      store.members.push(...member)
    },
    addProduct(product: ProductType[]) {
      store.products.push(product);
    },
  }));


export const useStore = () => {
  const store = useContext(RootStoreContext);
  if (!store) {
    throw new Error("useRootStore debe usarse dentro de un RootStoreProvider");
  }
  return store;
};

export const RootStoreContext = createContext<Instance<typeof RootStore> | null>(null);
export type RootStoreInstance = Instance<typeof RootStore>;
export type RootStoreSnapshot = SnapshotOut<typeof RootStore>;