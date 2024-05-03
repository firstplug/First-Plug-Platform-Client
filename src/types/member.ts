import { Instance, types } from "mobx-state-tree";
import { ShipmentStatus } from "./shipment";
import { ProductModel, zodProductModel } from "./product";
import { z } from "zod";
export const TeamMemberModel = types.model({
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
  products: types.optional(types.array(ProductModel), []),
});

export type TeamMember = Instance<typeof TeamMemberModel>;

export type TeamMemberTable = {
  _id: string;
  fullName: string;
  joiningDate: string;
  dateOfBirth: string;
  teams: string[];
  jobPosition: string;
  shipmentDetails: ShipmentStatus;
};
export type CreationTeamMember = Omit<TeamMember, "_id" | "teams" | "products">;

export const zodMemberModel = z.object({
  _id: z.string().optional(),
  firstName: z.string().optional(),
  img: z.string().optional(),
  lastName: z.string().optional(),
  dateOfBirth: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().optional(),
  jobPosition: z.string().optional(),
  city: z.string().optional(),
  zipCode: z.string().optional(),
  address: z.string().optional(),
  appartment: z.string().optional(),
  joiningDate: z.string().optional(),
  timeSlotForDelivery: z.string().optional(),
  additionalInfo: z.string().optional(),
  teams: z.array(z.string()).optional(),
  products: z.array(zodProductModel).optional(),
});
