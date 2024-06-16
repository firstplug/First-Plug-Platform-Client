export const ALERTS_TYPES = [
  "csvSuccess",
  "updateMember",
  "createMember",
  "errorDeleteStock",
] as const;
export type AlertType = (typeof ALERTS_TYPES)[number];
