import { Instance, types } from "mobx-state-tree";

export const LoggedInUserModel = types.model({
  _id: types.string,
  name: types.string,
  email: types.string,
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
