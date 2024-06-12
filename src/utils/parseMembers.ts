import { CreateMemberZodModel, CsvMember } from "@/types";

export function parseMembers(member: CsvMember): CreateMemberZodModel {
  return {
    firstName: member["First Name *"],
    lastName: member["Last Name *"],
    email: member["Email *"],
    startDate: member["Start Date"],
    birthDate: member["Birth Date"],
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
}
