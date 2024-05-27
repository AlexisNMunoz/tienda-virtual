import { StateCreator } from 'zustand'
import { Categories, Products } from '../types'
import { getCategories, getProducts } from '../services/Productos-services'

export type ProductsSliceType = {
  products: Products
  categories: Categories
  fetchProducts: () => Promise<void>
  fetchCategories: () => Promise<void>
}

export const createProdctsSlice: StateCreator<ProductsSliceType> = (set) => ({
  products: [],
  categories: [],
  fetchProducts: async () => {
    const products = await getProducts()
    set({
      products
    })
  },
  fetchCategories: async () => {
    const categories = await getCategories()
    set({
      categories
    })
  }
})
