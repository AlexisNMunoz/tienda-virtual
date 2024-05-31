import { StateCreator } from 'zustand'
import { Product } from '../types'

export type FavoritesSliceType = {
  favorites: Product[]
  handleClickFavorite: (product: Product) => void
  favoriteExist: (id: Product['id']) => boolean
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (set, get) => ({
  favorites: [],
  handleClickFavorite: (product) => {
    if (get().favoriteExist(product.id)) {
      set((state) => ({
        favorites: state.favorites.filter((favorite) => favorite.id !== product.id)
      }))
    } else {
      set((state) => ({
        favorites: [...state.favorites, product]
      }))
    }
  },
  favoriteExist: (id) => {
    return get().favorites.some((favorite) => favorite.id === id)
  }
})
