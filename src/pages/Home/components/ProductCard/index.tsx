import { ShoppingCart } from 'phosphor-react'

import { CoffeeType } from '../../../../@types/coffee'

import { Counter } from '../../../../components/Counter'

import {
  Actions,
  Badges,
  Card,
  Footer,
  ImageContainer,
  Price,
  BuyButton,
} from './styles'

interface ProductCardProps {
  coffeeData: CoffeeType
}

export function ProductCard({ coffeeData }: ProductCardProps) {
  const formattedPrice = (coffeeData.price / 100).toLocaleString('pt-br', {
    minimumFractionDigits: 2,
  })

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
          <Counter />

          <BuyButton>
            <ShoppingCart size={22} weight="fill" />
          </BuyButton>
        </Actions>
      </Footer>
    </Card>
  )
}
