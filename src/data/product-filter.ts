import { ProductFilterCategory } from "./product-filter-categories";
import { Product } from "./products";

export interface ProductFilter {
  id: number
  productFilterCategory: ProductFilterCategory
  products?: Product[]
  value: string
}
