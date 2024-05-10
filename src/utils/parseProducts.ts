import { AtrributeZod, CsvProduct, PrdouctModelZod } from "@/types";

export function parseProduct(product: CsvProduct): PrdouctModelZod {
  const arrayOfAttributes: AtrributeZod[] = [
    {
      key: "brand",
      value: product.brand,
    },
    {
      key: "model",
      value: product.model,
    },
    {
      key: "color",
      value: product.color,
    },
    {
      key: "screen",
      value: product.screen,
    },
    {
      key: "keyboardLenguage",
      value: product.keyboardLenguage,
    },
    {
      key: "processor",
      value: product.processor,
    },
    {
      key: "ram",
      value: product.ram,
    },

    {
      key: "storage",
      value: product.storage,
    },
    {
      key: "gpu",
      value: product.gpu,
    },
  ];
  const response: PrdouctModelZod = {
    category: product.category,
    acquisitionDate: product.acquisitionDate,
    assignedEmail: product.assignedEmail,
    name: product.name,
    location: product.location,
    serialNumber: product.serialNumber,
    status: product.assignedEmail ? "Delivered" : "Available",
    recoverable: false,
    attributes: arrayOfAttributes,
  };

  return response;
}
