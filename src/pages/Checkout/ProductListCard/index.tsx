import { useContext } from 'react'
import { Trash, Minus, Plus } from 'phosphor-react'

import { Item } from '../../../reducers/items/reducer'
import { CartItemsContext } from '../../../contexts/CartItemsContext'

import {
  Card,
  Content,
  ProductImage,
  Info,
  Actions,
  Price,
  CounterContainer,
  MinusButton,
  PlusButton,
} from './styles'

interface ProductListCardProps {
  data: Item
}

export function ProductListCard({ data }: ProductListCardProps) {
  const { increaseItemsCart, decreaseItemsCart, removeItemsCart } =
    useContext(CartItemsContext)

  function handlePlusAmount() {
    increaseItemsCart(data.id)
  }

  function handleSubAmount() {
    if (data.amount === 1) {
      return
    }

    decreaseItemsCart(data.id)
  }

  function handleRemoveItem() {
    removeItemsCart(data.id)
  }

  const formattedPrice = ((data.price * data.amount) / 100).toLocaleString(
    'pt-br',
    {
      minimumFractionDigits: 2,
    },
  )

  return (
    <Card>
      <Content>
        <ProductImage>
          <img src={data.image} alt={data.name} />
        </ProductImage>

        <Info>
          <span>{data.name}</span>

          <Actions>
            <CounterContainer>
              <MinusButton
                title="Menos um"
                onClick={handleSubAmount}
                type="button"
              >
                <Minus size={14} weight="bold" />
              </MinusButton>

              <span>{data.amount}</span>

              <PlusButton
                title="Mais um"
                onClick={handlePlusAmount}
                type="button"
              >
                <Plus size={14} weight="bold" />
              </PlusButton>
            </CounterContainer>

            <button type="button" onClick={handleRemoveItem}>
              <Trash size={16} />
              <span>Remover</span>
            </button>
          </Actions>
        </Info>
      </Content>

      <Price>
        <span>R$ {formattedPrice}</span>
      </Price>
    </Card>
  )
}
