import { types, Instance } from "mobx-state-tree";
import { ZodType, z } from "zod";
export const PRODUCT_STATUSES = ["Available", "Delivered"] as const;

export type ProductStatus = (typeof PRODUCT_STATUSES)[number];

const ProductSummaryModel = types.model({
  _id: types.string,
  name: types.optional(types.string, ""),
  category: types.optional(types.string, ""),
});

export const ProductModel = types.compose(
  ProductSummaryModel,
  types.model({
    recoverable: types.optional(types.string, ""),
    acquisitionDate: types.optional(types.string, ""),
    brand: types.optional(types.string, ""),
    model: types.optional(types.string, ""),
    color: types.optional(types.string, ""),
    screen: types.optional(types.string, ""),
    keyboard: types.optional(types.string, ""),
    processor: types.optional(types.string, ""),
    ram: types.optional(types.string, ""),
    storage: types.optional(types.string, ""),
    gpu: types.optional(types.string, ""),
    serialNumber: types.optional(types.string, ""),
    assignedEmail: types.optional(types.string, ""),
    location: types.optional(types.string, ""),
    status: types.optional(types.string, ""),
    createdAt: types.optional(types.string, ""),
    updatedAt: types.optional(types.string, ""),
  })
);
export type ProductSummary = Instance<typeof ProductSummaryModel>;
export type Product = Instance<typeof ProductModel>;

export type ProductTable = {
  category: {
    category: string;
    img: string;
  };
  model: {
    model: string;
    processor?: string;
    ram?: string;
    storage?: string;
  };
  quantity: number;
  serialNumber: string;
};

// TODO: After approving this. These types should be the main store types for each 'substore' (product.store and members.store)
export const zodProductModel = z.object({
  _id: z.string().optional(),
  name: z.string().optional(),
  category: z.string().optional(),
  recoverable: z.string().optional(),
  acquisitionDate: z.string().optional(),
  brand: z.string().optional(),
  model: z.string().optional(),
  color: z.string().optional(),
  screen: z.string().optional(),
  keyboard: z.string().optional(),
  processor: z.string().optional(),
  ram: z.string().optional(),
  storage: z.string().optional(),
  gpu: z.string().optional(),
  serialNumber: z.string().optional(),
  assignedEmail: z.string().optional(),
  location: z.string().optional(),
  status: z.string().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

export type PrdouctModelZod = z.infer<typeof zodProductModel>;
