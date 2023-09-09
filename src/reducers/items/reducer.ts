import { produce } from 'immer'

import { ActionTypes } from './actions'

export interface Item {
  id: string
  image: string
  name: string
  amount: number
  price: number
}

interface ItemsState {
  items: Item[]
}

export function itemsReducer(state: ItemsState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
      return produce(state, (draft) => {
        draft.items.push(action.payload.item)
      })
    case ActionTypes.INCREASE_ITEMS_CART: {
      const currentItemIndex = state.items.findIndex((item) => {
        return item.id === action.payload.itemId
      })

      if (currentItemIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.items[currentItemIndex].amount =
          draft.items[currentItemIndex].amount + 1
      })
    }
    case ActionTypes.DECREASE_ITEMS_CART: {
      const currentItemIndex = state.items.findIndex((item) => {
        return item.id === action.payload.itemId
      })

      if (currentItemIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.items[currentItemIndex].amount =
          draft.items[currentItemIndex].amount - 1
      })
    }
    case ActionTypes.REMOVE_ITEMS_CART: {
      const currentItemIndex = state.items.findIndex((item) => {
        return item.id === action.payload.itemId
      })

      if (currentItemIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.items.splice(currentItemIndex, 1)
      })
    }
    default:
      return state
  }
}
