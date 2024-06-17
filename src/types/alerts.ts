export const ALERTS_TYPES = [
  "csvSuccess",
  "updateMember",
  "updateStock",
  "createProduct",
  "createMember",
  "deleteMember",
  "deleteStock",
  "errorDeleteStock",
  "errorDeleteMember",
  "errorRecoverableStock",
] as const;
export type AlertType = (typeof ALERTS_TYPES)[number];
