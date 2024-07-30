import { type SchemaTypeDefinition } from "sanity";
import { product } from "./schemas/product-schema";
import { category } from "./schemas/category-schema";
import { details } from "./schemas/store-details";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, details],
};
