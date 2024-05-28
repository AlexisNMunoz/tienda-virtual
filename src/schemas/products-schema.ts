import { z } from 'zod'

export const ProductAPIResponseSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  category: z.string(),
  image: z.string()
})

export const ProductsAPIResponseSchema = z.array(
  z.object({
    id: z.number(),
    title: z.string(),
    price: z.number(),
    description: z.string(),
    category: z.string(),
    image: z.string()
  })
)

export const CategoriesAPIResponseSchema = z.array(z.string())
