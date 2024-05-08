import { AtrributeZod, CsvProduct, PrdouctModelZod } from "@/types";

export function parseProduct(product: CsvProduct) {
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
    attributes: arrayOfAttributes,
  };

  return response;
}
