import { Instance, types } from "mobx-state-tree";

export const UserModel = types.model({
  _id: types.string,
  name: types.string,
  email: types.string,
  password: types.maybeNull(types.string),
  image: types.maybeNull(types.string),
  accessToken: types.string,
});

export type User = Instance<typeof UserModel>;

export type RegisterUser = Pick<User, "name" | "email" | "password">;

export type RegisterUserPlatforms = Pick<User, "name" | "email" | "image">;

export type LoginUser = Pick<User, "email" | "password">;
