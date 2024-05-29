import { z } from "zod";
import { CATEGORIES, LOCATION, zodProductModel } from "./product";
// TODO: After approving this. These types should be the main store types for each 'substore' (product.store and members.store)
export const csvProductModel = z
  .object({
    _id: z.string().optional(),
    name: z.string().optional(),
    acquisitionDate: z.string().optional(),
    "category*": z.enum(CATEGORIES).refine((val) => CATEGORIES.includes(val), {
      message: "El valor ingresado no es una categoría válida",
    }),
    "model*": z.string().optional(),
    "brand*": z.string().optional(),
    color: z.string().optional(),
    screen: z.string().optional(),
    keyboardLanguage: z.string().optional(),
    processor: z.string().optional(),
    ram: z.string().optional(),
    storage: z.string().optional(),
    gpu: z.string().optional(),
    serialNumber: z.string().optional(),
    "location*": z.enum(LOCATION).superRefine((value, ctx) => {
      if (!value) {
        ctx.addIssue({
          code: "custom",
          path: ["location"],
          message: `The field 'location' is required.`,
        });
      } else {
        // @ts-ignore
        if (!LOCATION.includes(value)) {
          ctx.addIssue({
            code: "custom",
            path: ["location"],
            message: ` "${value}" is not correct value for Location .`,
          });
        }
      }
    }),
    assignedEmail: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data["category*"] === "Merchandising") {
      if (!data.name) {
        ctx.addIssue({
          code: "custom",
          path: ["name"],
          message: `The field 'name' is required for ${data["category*"]} category`,
        });
      }
    } else {
      if (!data["model*"]) {
        ctx.addIssue({
          code: "custom",
          path: ["model*"],
          message: `The field 'model' is required for ${data["category*"]} category.`,
        });
      }
      if (!data["brand*"]) {
        ctx.addIssue({
          code: "custom",
          path: ["brand*"],
          message: `The field 'brand' is required for ${data["category*"]} category.`,
        });
      }
    }
  });
export type CsvProduct = z.infer<typeof csvProductModel>;
export const csvFileSquema = z.array(csvProductModel);
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
export type MembersModelZod = z.infer<typeof zodMemberModel>;
export const csvSquema = z.object({
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
