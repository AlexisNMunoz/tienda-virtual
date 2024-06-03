import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { ProductsSliceType, createProdctsSlice } from './productSlice'
import { FavoritesSliceType, createFavoritesSlice } from './favoritesSlice'
import { createCartSlice, CartSliceType } from './cartShopSlice'

export const useAppStore = create<ProductsSliceType & FavoritesSliceType & CartSliceType>()(
  devtools((...a) => ({
    ...createProdctsSlice(...a),
    ...createFavoritesSlice(...a),
    ...createCartSlice(...a)
  }))
)
