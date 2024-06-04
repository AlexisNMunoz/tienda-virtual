import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { ProductsSliceType, createProdctsSlice } from './productSlice'
import { FavoritesSliceType, createFavoritesSlice } from './favoritesSlice'
import { createCartSlice, CartSliceType } from './cartShopSlice'
import { createNotificationSlice, NotificationSliceType } from './notificationSlice'

export const useAppStore = create<
  ProductsSliceType & FavoritesSliceType & CartSliceType & NotificationSliceType
>()(
  devtools((...a) => ({
    ...createProdctsSlice(...a),
    ...createFavoritesSlice(...a),
    ...createCartSlice(...a),
    ...createNotificationSlice(...a)
  }))
)
