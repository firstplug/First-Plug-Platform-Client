import { z, ZodType } from "zod";
// Definición del esquema de ProductModel utilizando Zod
export const zodProductModel = z.object({
  _id: z.string(),
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

// Tipo de instancia para ProductModel
// export type Product = z.infer<typeof zodProductModel>;

export const csvSquema = z.object({
  data: zodProductModel,
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
