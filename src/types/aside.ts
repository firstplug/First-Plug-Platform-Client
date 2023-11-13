export const ASIDE_TYPES = [
  "EditTeam",
  "EditMember",
  "LoadStock",
  "NewTeam",
  "MemberDetails",
  "OrderDetails",
] as const;

export type AsideType = (typeof ASIDE_TYPES)[number];
