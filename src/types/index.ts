import { z } from 'zod'
import {
  CategoriesAPIResponseSchema,
  ProductAPIResponseSchema,
  ProductsAPIResponseSchema
} from '../schemas/products-schema'

export type Products = z.infer<typeof ProductsAPIResponseSchema>
export type Product = z.infer<typeof ProductAPIResponseSchema>
export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
