import { type SchemaTypeDefinition } from "sanity";
import { product } from "./schemas/product-schema";
import { category } from "./schemas/category-schema";
import { phoneNo } from "./schemas/phone-number";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, phoneNo],
};
