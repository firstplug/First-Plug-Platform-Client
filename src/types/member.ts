import { Instance, cast, types } from "mobx-state-tree";
import { ProductModel } from "./product";
import { z } from "zod";

const TeamModel = types.model({
  _id: types.string,
  name: types.string,
});

export const TeamMemberModel = types.model({
  _id: types.optional(types.string, ""),
  firstName: types.string,
  lastName: types.string,
  email: types.string,
  picture: types.optional(types.string, ""),
  position: types.optional(types.string, ""),
  personalEmail: types.optional(types.string, ""),
  birthDate: types.optional(types.string, ""),
  phone: types.optional(types.string, ""),
  city: types.optional(types.string, ""),
  country: types.optional(types.string, ""),
  zipCode: types.optional(types.string, ""),
  address: types.optional(types.string, ""),
  apartment: types.optional(types.string, ""),
  additionalInfo: types.optional(types.string, ""),
  startDate: types.optional(types.string, ""),
  products: types.optional(types.array(ProductModel), []),
  team: types.optional(types.array(TeamModel), []),
});

export type TeamMember = Instance<typeof TeamMemberModel>;

export type CreationTeamMember = Omit<TeamMember, "_id" | "products">;

export const emptyTeamMember: CreationTeamMember = {
  firstName: "",
  lastName: "",
  email: "",
  picture: "",
  position: "",
  personalEmail: "",
  birthDate: "",
  phone: "",
  city: "",
  country: "",
  zipCode: "",
  address: "",
  apartment: "",
  additionalInfo: "",
  startDate: "",
  team: cast([]),
};

export const zodCreateMemberModel = z.object({
  firstName: z.string().min(1).trim(),
  lastName: z.string().min(1).trim(),
  email: z.string().email().trim().toLowerCase(),
  picture: z.string().optional(),
  position: z.string().optional(),
  personalEmail: z.string().email().optional(),
  birthDate: z.string().optional(),
  phone: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  zipCode: z.string().optional(),
  address: z.string().optional(),
  apartment: z.string().optional(),
  additionalInfo: z.string().optional(),
  startDate: z.string().optional(),
  team: z
    .array(
      z.object({
        _id: z.string(),
        name: z.string(),
      })
    )
    .optional(),
});

export type CreateMemberZod = z.infer<typeof zodCreateMemberModel>;
