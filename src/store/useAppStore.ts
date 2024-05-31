import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { ProductsSliceType, createProdctsSlice } from './productSlice'
import { FavoritesSliceType, createFavoritesSlice } from './favoritesSlice'

export const useAppStore = create<ProductsSliceType & FavoritesSliceType>()(
  devtools((...a) => ({
    ...createProdctsSlice(...a),
    ...createFavoritesSlice(...a)
  }))
)
