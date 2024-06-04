import { StateCreator } from 'zustand'
import { Product } from '../types'
import { FavoritesSliceType } from './favoritesSlice'
import { NotificationSliceType, createNotificationSlice } from './notificationSlice'

export type CartSliceType = {
  cart: Product[]
  handleClickCart: (product: Product) => void
  cartExist: (id: Product['id']) => boolean
  loadFromStorageCart: () => void
}

export const createCartSlice: StateCreator<
  CartSliceType & FavoritesSliceType & NotificationSliceType,
  [],
  [],
  CartSliceType
> = (set, get, api) => ({
  cart: [],
  handleClickCart: (product: Product) => {
    if (get().cartExist(product.id)) {
      set({
        cart: get().cart.filter((productCart) => productCart.id !== product.id)
      })
      createNotificationSlice(set, get, api).showNotification({
        text: 'Se elimino del carrito',
        error: false
      })
    } else {
      set({
        cart: [...get().cart, product]
      })
      createNotificationSlice(set, get, api).showNotification({
        text: 'Se agrego al carrito',
        error: false
      })
    }
    localStorage.setItem('cart', JSON.stringify(get().cart))
  },
  cartExist: (id) => {
    return get().cart.some((product) => product.id === id)
  },
  loadFromStorageCart: () => {
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
      set({
        cart: JSON.parse(storedCart)
      })
    }
  }
})
