import { ItemType } from '@/lib/types'
import { atom } from 'jotai'

export const cart = atom<ItemType[]>([])

export const addToCart = atom(null, (get, set, item: ItemType) => {
  const currentCart = get(cart)
  set(cart, [...currentCart, item])
})

export const removeFromCart = atom(null, (get, set, item: ItemType) => {
  const currentCart = get(cart)
  const updatedCart = currentCart.filter(cartItem => cartItem.id !== item.id)
  set(cart, updatedCart)
})
