import { StateCreator } from 'zustand'
import { Product } from '../types'
import { NotificationSliceType, createNotificationSlice } from './notificationSlice'
import { CartSliceType } from './cartShopSlice'

export type FavoritesSliceType = {
  favorites: Product[]
  handleClickFavorite: (product: Product) => void
  favoriteExist: (id: Product['id']) => boolean
  loadFromStorage: () => void
}

export const createFavoritesSlice: StateCreator<
  FavoritesSliceType & NotificationSliceType & CartSliceType,
  [],
  [],
  FavoritesSliceType
> = (set, get, api) => ({
  favorites: [],
  handleClickFavorite: (product) => {
    if (get().favoriteExist(product.id)) {
      set((state) => ({
        favorites: state.favorites.filter((favorite) => favorite.id !== product.id)
      }))
      createNotificationSlice(set, get, api).showNotification({
        text: 'Se elimino de Favoritos',
        error: false
      })
    } else {
      set((state) => ({
        favorites: [...state.favorites, product]
      }))
      createNotificationSlice(set, get, api).showNotification({
        text: 'Se agrego a Favoritos',
        error: false
      })
    }
    localStorage.setItem('favorites', JSON.stringify(get().favorites))
  },
  favoriteExist: (id) => {
    return get().favorites.some((favorite) => favorite.id === id)
  },
  loadFromStorage: () => {
    const storedfavorites = localStorage.getItem('favorites')
    if (storedfavorites) {
      set({
        favorites: JSON.parse(storedfavorites)
      })
    }
  }
})
