import { types, Instance, cast } from "mobx-state-tree";
import { z } from "zod";
export const PRODUCT_STATUSES = ["Available", "Delivered"] as const;
export type ProductStatus = (typeof PRODUCT_STATUSES)[number];

export const LOCATION = ["Our office", "FP warehouse", "Employee"] as const;
export type Location = (typeof LOCATION)[number];
export const CATEGORIES = [
  "Merchandising",
  "Computer",
  "Monitor",
  "Audio",
  "Peripherals",
  "Other",
] as const;
export type Category = (typeof CATEGORIES)[number];
export const KEYS = [
  "brand",
  "model",
  "color",
  "screen",
  "keyboardLanguage",
  "processor",
  "ram",
  "storage",
  "gpu",
] as const;
export type Key = (typeof KEYS)[number];
export const CATEGORY_KEYS: Record<Category, readonly Key[]> = {
  Merchandising: ["color"],
  Computer: [
    "brand",
    "model",
    "color",
    "screen",
    "keyboardLanguage",
    "processor",
    "ram",
    "storage",
    "gpu",
  ],
  Monitor: ["brand", "model", "screen", "color"],
  Audio: ["brand", "model", "color"],
  Peripherals: ["brand", "model", "color", "keyboardLanguage"],
  Other: ["brand", "color", "model"],
};
// -------------------- MOBX DEFINITION -----------------------

export const AttributeModel = types.model({
  _id: types.string,
  key: types.enumeration(KEYS),
  value: types.optional(types.string, ""),
});
export type Atrribute = Instance<typeof AttributeModel>;

export const ProductModel = types.model({
  _id: types.string,
  name: types.optional(types.string, ""),
  category: types.enumeration(CATEGORIES),
  attributes: types.array(AttributeModel),
  status: types.enumeration(PRODUCT_STATUSES),
  deleted: types.optional(types.boolean, false),
  recoverable: types.optional(types.boolean, true),
  acquisitionDate: types.optional(types.string, ""),
  createdAt: types.optional(types.string, ""),
  updatedAt: types.optional(types.string, ""),
  deletedAt: types.optional(types.string, ""),
  location: types.optional(types.string, ""),
  assignedEmail: types.optional(types.string, ""),
  serialNumber: types.optional(types.string, ""),
});
export type Product = Instance<typeof ProductModel>;

export const emptyProduct: Omit<Product, "category"> & { category: string } = {
  _id: "",
  name: "",
  category: "",
  attributes: cast([]),
  status: "Available",
  deleted: false,
  recoverable: true,
  acquisitionDate: "",
  createdAt: "",
  updatedAt: "",
  deletedAt: "",
  location: "",
  assignedEmail: "",
  serialNumber: "",
};

export const ProductTableModel = types.model({
  category: types.string,
  name: types.string,
  products: types.array(ProductModel),
});
export type ProductTable = Instance<typeof ProductTableModel>;
// -------------------- ZOD DEFINITION -----------------------

export const zodAtrributesModel = z.object({
  key: z.enum(KEYS).optional(),
  value: z.string().optional(),
});
export type AtrributeZod = z.infer<typeof zodAtrributesModel>;

// --------

export const zodProductModel = z.object({
  _id: z.string().optional(),
  name: z.string().min(1),
  category: z.enum(CATEGORIES),
  acquisitionDate: z.string().optional(),
  attributes: z.array(zodAtrributesModel).optional(),
  deleted: z.boolean().optional(),
  recoverable: z.boolean().optional(),
  location: z.enum(LOCATION),
  assignedEmail: z.string().optional(),
  serialNumber: z.string().optional(),
  status: z.string().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  deletedAt: z.string().optional(),
});

export type PrdouctModelZod = z.infer<typeof zodProductModel>;

// -------- create my own zod schema for the createProductform

export const zodCreateProductModel = z.object({
  _id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  category: z.enum(CATEGORIES, { required_error: "Category is required" }),
  assignedEmail: z
    .string()
    .refine((value) => value === "" || value.length > 0, {
      message: "Assigned Member is required",
    }),
  status: z.string().optional(),
  location: z.string().optional(),
  recoverable: z.boolean().optional(),
  acquisitionDate: z.string().optional(),
  attributes: z
    .array(
      z.object({
        key: z.enum(KEYS),
        value: z.string().optional().nullable(),
      })
    )
    .optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  deletedAt: z.string().optional(),
  deleted: z.boolean().optional(),
  serialNumber: z.string().optional(),
});
