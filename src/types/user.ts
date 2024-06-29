import { Instance, types } from "mobx-state-tree";
import { z } from "zod";

export const LoggedInUserModel = types.model({
  _id: types.string,
  name: types.string,
  email: types.string,
  phone: types.optional(types.string, ""),
  city: types.optional(types.string, ""),
  state: types.optional(types.string, ""),
  country: types.optional(types.string, ""),
  zipCode: types.optional(types.string, ""),
  address: types.optional(types.string, ""),
  apartment: types.optional(types.string, ""),
  image: types.maybeNull(types.string),
  tenantName: types.maybeNull(types.string),
});
export const UserModel = types.compose(
  LoggedInUserModel,
  types.model({
    password: types.maybeNull(types.string),
  })
);

export type LoggedInUser = Instance<typeof LoggedInUserModel>;
export type User = Instance<typeof UserModel>;

export type RegisterUser = Pick<
  User,
  "name" | "email" | "password" | "tenantName"
>;

export type RegisterUserPlatforms = Pick<
  User,
  "name" | "email" | "image" | "tenantName"
>;

export type LoginUser = Pick<User, "email" | "password">;
const phoneRegex = /^\+?[0-9\s]*$/;

export const UserZodSchema = z.object({
  _id: z.string(),
  name: z.string(),
  email: z.string(),
  image: z.string().optional(),
  tenantName: z.string().optional(),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, {
      message: "Phone number is invalid",
    })
    .optional(),
  city: z.string().trim().optional(),
  state: z.string().trim().optional(),
  country: z.string().trim().optional(),
  zipCode: z.string().trim().optional(),
  address: z.string().trim().optional(),
  apartment: z.string().trim().optional(),
});

export type UserZod = z.infer<typeof UserZodSchema>;
export type SettingsFormKeys = keyof Omit<
  UserZod,
  "_id" | "name" | "email" | "image" | "tenantName"
>;
export const SETTINGS_ARRAY_KEYS: SettingsFormKeys[] = [
  "phone",
  "city",
  "state",
  "country",
  "zipCode",
  "address",
  "apartment",
];

type SettingsFormInput = {
  label: string;
  placeholder: string;
  error: string;
  name: SettingsFormKeys;
};
export const SettingsFormConfig: Record<SettingsFormKeys, SettingsFormInput> = {
  address: {
    error: "errore",
    label: "Address",
    name: "address",
    placeholder: "address",
  },
  apartment: {
    error: "",
    label: "",
    name: "apartment",
    placeholder: "",
  },
  city: {
    error: "",
    label: "",
    name: "city",
    placeholder: "",
  },
  country: {
    error: "",
    label: "",
    name: "country",
    placeholder: "",
  },
  phone: {
    error: "",
    label: "Contact Phone Number",
    name: "phone",
    placeholder: "+54 11 111111",
  },
  state: {
    error: "",
    label: "",
    name: "state",
    placeholder: "",
  },
  zipCode: {
    error: "",
    label: "",
    name: "zipCode",
    placeholder: "",
  },
};
