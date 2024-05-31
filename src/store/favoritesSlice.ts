import { StateCreator } from 'zustand'
import { Product } from '../types'

export type FavoritesSliceType = {
  favorites: Product[]
  handleClickFavorite: (product: Product) => void
  favoriteExist: (id: Product['id']) => boolean
  loadFromStorage: () => void
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
