import { ReactNode, createContext, useEffect, useReducer } from 'react'

import { Item, itemsReducer } from '../reducers/items/reducer'
import { CoffeeType } from '../@types/coffee'
import { addItemToCartAction } from '../reducers/items/actions'

interface CartItemsContextType {
  items: Item[]
  totalCartItems: number
  addItemToCart: (data: CoffeeType, amount: number) => void
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
      name: data.name,
      price: data.price,
      amount,
    }

    dispatch(addItemToCartAction(newItem))
  }

  return (
    <CartItemsContext.Provider
      value={{
        items,
        totalCartItems,
        addItemToCart,
      }}
    >
      {children}
    </CartItemsContext.Provider>
  )
}
