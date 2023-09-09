import { ReactNode, createContext, useEffect, useReducer } from 'react'

import { Item, itemsReducer } from '../reducers/items/reducer'
import { CoffeeType } from '../@types/coffee'
import {
  addItemToCartAction,
  decreaseItemsCartAction,
  increaseItemsCartAction,
  removeItemsCartAction,
} from '../reducers/items/actions'

interface CartItemsContextType {
  items: Item[]
  totalCartItems: number
  addItemToCart: (data: CoffeeType, amount: number) => void
  increaseItemsCart: (itemId: string) => void
  decreaseItemsCart: (itemId: string) => void
  removeItemsCart: (itemId: string) => void
}

export const CartItemsContext = createContext({} as CartItemsContextType)

interface CartItemsContextProviderProps {
  children: ReactNode
}

export function CartItemContextProvider({
  children,
}: CartItemsContextProviderProps) {
  const [cartItemState, dispatch] = useReducer(
    itemsReducer,
    { items: [] },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-coffee-delivery:items-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const { items } = cartItemState
  const totalCartItems = items.length

  useEffect(() => {
    const stateJSON = JSON.stringify(cartItemState)

    localStorage.setItem('@ignite-coffee-delivery:items-state-1.0.0', stateJSON)
  }, [cartItemState])

  function addItemToCart(data: CoffeeType, amount: number) {
    const newItem: Item = {
      id: data.id,
      image: data.imageUrl,
      name: data.name,
      price: data.price,
      amount,
    }

    dispatch(addItemToCartAction(newItem))
  }

  function increaseItemsCart(itemId: string) {
    dispatch(increaseItemsCartAction(itemId))
  }

  function decreaseItemsCart(itemId: string) {
    dispatch(decreaseItemsCartAction(itemId))
  }

  function removeItemsCart(itemId: string) {
    dispatch(removeItemsCartAction(itemId))
  }

  return (
    <CartItemsContext.Provider
      value={{
        items,
        totalCartItems,
        addItemToCart,
        increaseItemsCart,
        decreaseItemsCart,
        removeItemsCart,
      }}
    >
      {children}
    </CartItemsContext.Provider>
  )
}
