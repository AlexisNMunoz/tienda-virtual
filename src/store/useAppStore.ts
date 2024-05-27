import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { ProductsSliceType, createProdctsSlice } from './productSlice'

export const useAppStore = create<ProductsSliceType>()(
  devtools((...a) => ({
    ...createProdctsSlice(...a)
  }))
)
