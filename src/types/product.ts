import { types, Instance, cast } from "mobx-state-tree";
import { z } from "zod";
export const PRODUCT_STATUSES = [
  "Available",
  "Delivered",
  "Deprecated",
] as const;
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
  // _id: types.string,
  key: types.enumeration(KEYS),
  value: types.optional(types.string, ""),
});
export type Atrribute = Instance<typeof AttributeModel>;

export const ProductModel = types.model({
  _id: types.string,
  name: types.maybeNull(types.string),
  category: types.enumeration(CATEGORIES),
  attributes: types.array(AttributeModel),
  status: types.enumeration(PRODUCT_STATUSES),
  deleted: types.optional(types.boolean, false),
  recoverable: types.optional(types.boolean, true),
  acquisitionDate: types.optional(types.string, ""),
  createdAt: types.optional(types.string, ""),
  updatedAt: types.optional(types.string, ""),
  deletedAt: types.maybeNull(types.string),
  location: types.optional(types.string, ""),
  assignedEmail: types.optional(types.string, ""),
  assignedMember: types.optional(types.string, ""),
  serialNumber: types.maybeNull(types.string),
});
export type Product = Instance<typeof ProductModel>;

export const emptyProduct: Omit<Product, "category"> & { category: string } = {
  _id: "",
  name: "",
  category: undefined,
  attributes: cast([]),
  status: "Available",
  deleted: false,
  recoverable: true,
  acquisitionDate: "",
  createdAt: "",
  updatedAt: "",
  deletedAt: "",
  serialNumber: "",
  location: undefined,
  assignedEmail: undefined,
  assignedMember: undefined,
};

export const ProductTableModel = types.model({
  category: types.string,
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
  name: z.string().optional(),
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

export const zodCreateProductModel = z
  .object({
    _id: z.string().optional(),
    name: z.string().optional(),
    category: z.enum(CATEGORIES, {
      required_error: "Category is required",
      invalid_type_error: "Invalid category",
    }),
    attributes: z
      .array(
        z.object({
          key: z.enum(KEYS),
          value: z.string().optional().default(""),
        })
      )
      .refine(
        (attrs) => {
          const keys = attrs.map((attr) => attr.key);
          return new Set(keys).size === keys.length;
        },
        {
          message: "Attribute keys must be unique.",
        }
      ),
    serialNumber: z.string().optional(),
    recoverable: z.boolean().default(true).optional(),
    assignedMember: z.string().optional(),
    assignedEmail: z
      .string()
      .optional()
      .refine(
        (value) => value !== undefined && value !== null && value !== "None",
        {
          message: "Assigned Member is required",
        }
      ),
    acquisitionDate: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    deletedAt: z.string().optional().nullable(),
    deleted: z.boolean().optional(),
    location: z.enum(LOCATION, {
      required_error: "Location is required",
      invalid_type_error: "Invalid location",
    }),
    status: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.category === "Merchandising" && !data.name) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Name is required for Merchandising category.",
        path: ["name"],
      });
    }

    if (data.category === "Merchandising") {
      data.recoverable = false;
    } else {
      data.recoverable = true;
    }
    if (data.category !== "Merchandising") {
      const attributeKeys = data.attributes.map((attr) => attr.key);
      if (!attributeKeys.includes("brand")) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Brand is required for this category.",
          path: ["brand"],
        });
      }
      if (!attributeKeys.includes("model")) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Model is required for this category.",
          path: ["model"],
        });
      }
    }
  })
  .refine(
    (data) => {
      if (data.category === "Merchandising" && data.recoverable) {
        return false;
      }
      return true;
    },
    {
      message: "Merchandising products must not be recoverable.",
    }
  );

export type CreateProductModel = z.infer<typeof zodCreateProductModel>;
