import { z } from 'zod'
import { CategoriesAPIResponseSchema, ProductsAPIResponseSchema } from '../schemas/products-schema'

export type Products = z.infer<typeof ProductsAPIResponseSchema>
export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
