import { Trash } from 'phosphor-react'

import coffeeImg from '../../../assets/coffees/capuccino.png'

import { Counter } from '../../../components/Counter'

import { Card, Content, ProductImage, Info, Actions, Price } from './styles'

export function ProductListCard() {
  return (
    <Card>
      <Content>
        <ProductImage>
          <img src={coffeeImg} alt="" />
        </ProductImage>

        <Info>
          <span>Expresso Tradicional</span>

          <Actions>
            <Counter />

            <button type="button">
              <Trash size={16} />
              <span>Remover</span>
            </button>
          </Actions>
        </Info>
      </Content>

      <Price>
        <span>R$ 19,80</span>
      </Price>
    </Card>
  )
}
