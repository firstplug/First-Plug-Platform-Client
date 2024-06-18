import { CreateMemberZodModel, CsvMember } from "@/types";

export function parseMembers(member: CsvMember): CreateMemberZodModel {
  const obj = {
    firstName: member["First Name *"],
    lastName: member["Last Name *"],
    email: member["Email *"],
    startDate: new Date(member["Start Date"]).toISOString(),
    birthDate: new Date(member["Birth Date"]).toISOString(),
    team: member.Team,
    personalEmail: member["Personal Email"],
    phone: member.Phone,
    additionalInfo: member["Additional Info"],
    address: member.Address,
    apartment: member.Apartment,
    city: member.City,
    country: member.Country,
    zipCode: member["Zip Code"],
    position: member["Job Position"],
  };

  const filteredObj = Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => value)
  );

  return filteredObj;
}
