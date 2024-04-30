import { z } from "zod";
// TODO: After approving this. These types should be the main store types for each 'substore' (product.store and members.store)
export const zodProductModel = z.object({
  _id: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  category: z.string().optional(),
  model: z.string().optional(),
  color: z.string().optional(),
  screen: z.string().optional(),
  keyboard: z.string().optional(),
  processor: z.string().optional(),
  ram: z.string().optional(),
  storage: z.string().optional(),
  gpu: z.string().optional(),
  serialNumber: z.string().optional(),
  price: z.string().optional(),
  status: z.string().optional(),
  imgUrl: z.string().optional(),
  stock: z.number(),
});

export type PrdouctModel = z.infer<typeof zodProductModel>;
export const zodMemberModel = z.object({
  _id: z.string().optional(),
  firstName: z.string().optional(),
  img: z.string().optional(),
  lastName: z.string().optional(),
  dateOfBirth: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().optional(),
  jobPosition: z.string().optional(),
  city: z.string().optional(),
  zipCode: z.string().optional(),
  address: z.string().optional(),
  appartment: z.string().optional(),
  joiningDate: z.string().optional(),
  timeSlotForDelivery: z.string().optional(),
  additionalInfo: z.string().optional(),
  teams: z.array(z.string()).optional(),
  products: z.array(zodProductModel).optional(),
});
export type MembersModel = z.infer<typeof zodMemberModel>;
export const csvProductSquema = z.object({
  prdoucts: z.array(zodProductModel).optional(),
  members: z.array(zodMemberModel).optional(),
});
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
