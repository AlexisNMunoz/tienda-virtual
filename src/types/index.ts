import { z } from 'zod'
import { ProductsAPIResponseSchema } from '../schemas/products-schema'

export type Products = z.infer<typeof ProductsAPIResponseSchema>
