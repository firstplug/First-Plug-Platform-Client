export const ALERTS_TYPES = [
  "csvSuccess",
  "updateMember",
  "createMember",
  "deleteMember",
  "errorDeleteStock",
  "errorDeleteMember",
] as const;
export type AlertType = (typeof ALERTS_TYPES)[number];
