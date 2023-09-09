import { useContext, useState } from 'react'
import { ShoppingCart, Minus, Plus } from 'phosphor-react'

import { CoffeeType } from '../../../../@types/coffee'

import { CartItemsContext } from '../../../../contexts/CartItemsContext'

import {
  Actions,
  Badges,
  Card,
  Footer,
  ImageContainer,
  Price,
  BuyButton,
  CounterContainer,
  MinusButton,
  PlusButton,
} from './styles'

interface ProductCardProps {
  coffeeData: CoffeeType
}

export function ProductCard({ coffeeData }: ProductCardProps) {
  const { addItemToCart } = useContext(CartItemsContext)

  const [count, setCount] = useState(1)

  function handleAdd() {
    setCount((oldState) => oldState + 1)
  }

  function handleSub() {
    setCount((oldState) => {
      if (oldState === 0) {
        return 0
      }

      return oldState - 1
    })
  }

  const formattedPrice = (coffeeData.price / 100).toLocaleString('pt-br', {
    minimumFractionDigits: 2,
  })

  function handleAddItemToCart() {
    addItemToCart(coffeeData, count)
    setCount(1)
  }

  return (
    <Card>
      <ImageContainer>
        <img src={coffeeData.imageUrl} alt={coffeeData.name} />
      </ImageContainer>

      <Badges>
        {coffeeData.categories.map((category) => (
          <span key={category}>{category}</span>
        ))}
      </Badges>

      <h3>{coffeeData.name}</h3>

      <span>{coffeeData.description}</span>

      <Footer>
        <Price>
          <small>R$</small>
          <span>{formattedPrice}</span>
        </Price>

        <Actions>
          <CounterContainer>
            <MinusButton title="Menos um" onClick={handleSub}>
              <Minus size={14} weight="bold" />
            </MinusButton>

            <span>{count}</span>

            <PlusButton title="Mais um" onClick={handleAdd}>
              <Plus size={14} weight="bold" />
            </PlusButton>
          </CounterContainer>

          <BuyButton onClick={handleAddItemToCart}>
            <ShoppingCart size={22} weight="fill" />
          </BuyButton>
        </Actions>
      </Footer>
    </Card>
  )
}
