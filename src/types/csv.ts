export type CsvInfo = {
  title: string;
  file: string;
  currentDate: string;
};

export const CSVUrls = {
  MyTeam: "/api/members/bulkcreate",
  MyStock: "/api/products/bulkcreate",
} as const;

export const CSVTeamplates = {
  LoadStock:
    "name,description,category,color,screen,keyboard,processor,ram,storage,gpu,serialNumber,status,stock",
  LoadMembers:
    "firstName,lastName,dateOfBirth,dni,phone,email,teams,jobPosition,country,city,zipCode,address,appartment,joiningDate,timeSlotForDelivery,additionalInfo",
} as const;

export type CSVUrl = keyof typeof CSVUrls;
