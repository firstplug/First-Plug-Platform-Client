export const ASIDE_TYPES = [
  "editTeam",
  "editMember",
  "loadStock",
  "newTeam",
  "memberDetails",
  "orderDetails",
] as const;

export type AsideType = (typeof ASIDE_TYPES)[number];
