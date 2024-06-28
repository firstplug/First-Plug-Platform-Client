import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: User;

    backendTokens: {
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
    };
  }
}

import { JWT } from "next-auth/jwt";
import { UserZod } from "./user";

declare module "next-auth/jwt" {
  interface JWT {
    user: UserZod;

    backendTokens: {
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
    };
  }
}
