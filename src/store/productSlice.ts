import { StateCreator } from 'zustand'
import { Products } from '../types'
import { getProducts } from '../services/Productos-services'

export type ProductsSliceType = {
  products: Products
  fetchProducts: () => Promise<void>
}

export const createProdctsSlice: StateCreator<ProductsSliceType> = (set) => ({
  products: [],
  fetchProducts: async () => {
    const products = await getProducts()
    set({
      products
    })
  }
})
