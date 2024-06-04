import { StateCreator } from 'zustand'
import { Product } from '../types'

export type CartSliceType = {
  cart: Product[]
  handleClickCart: (product: Product) => void
  cartExist: (id: Product['id']) => boolean
  loadFromStorageCart: () => void
}

export const createCartSlice: StateCreator<CartSliceType> = (set, get) => ({
  cart: [],
  handleClickCart: (product: Product) => {
    if (get().cartExist(product.id)) {
      set({
        cart: get().cart.filter((productCart) => productCart.id !== product.id)
      })
    } else {
      set({
        cart: [...get().cart, product]
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
