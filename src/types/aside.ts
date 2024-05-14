export const ASIDE_TYPES = [
  "EditTeam",
  "EditMember",
  "LoadStock",
  "LoadMembers",
  "NewTeam",
  "MemberDetails",
  "OrderDetails",
  "AssingProduct",
  "ReassingProduct",
] as const;

export type AsideType = (typeof ASIDE_TYPES)[number];
