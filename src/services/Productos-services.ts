import axios from 'axios'
import { CategoriesAPIResponseSchema, ProductsAPIResponseSchema } from '../schemas/products-schema'

export async function getProducts() {
  const url = 'https://fakestoreapi.com/products'
  const { data } = await axios(url)
  const result = ProductsAPIResponseSchema.safeParse(data)
  if (result.success) {
    return result.data
  }
}

export async function getCategories() {
  const url = 'https://fakestoreapi.com/products/categories'
  const { data } = await axios(url)

  const result = CategoriesAPIResponseSchema.safeParse(data)
  if (result.success) {
    return result.data
  }
}
