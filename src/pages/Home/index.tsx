import { Package, ShoppingCart, Timer, Coffee } from 'phosphor-react'
import { useEffect, useState } from 'react'

import { CoffeeType } from '../../@types/coffee'
import { api } from '../../services/api'

import heroImg from '../../assets/hero-image.png'

import { ProductCard } from './components/ProductCard'

import {
  HomeContainer,
  HeroSection,
  GridColumn,
  GridRow,
  Content,
  IconCircle,
  ImageContainer,
  CoffeeSection,
  CoffeeList,
} from './styles'

export function Home() {
  const [coffees, setCoffees] = useState<CoffeeType[]>([])

  useEffect(() => {
    listCoffees()
  }, [])

  async function listCoffees() {
    const { data } = await api.get<CoffeeType[]>('/coffees')

    if (data) {
      setCoffees(data)
    }
  }

  return (
    <HomeContainer>
      <HeroSection>
        <GridRow>
          <Content>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>

            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <ul>
              <li>
                <IconCircle circleColor="yellowDark">
                  <ShoppingCart size={16} weight="fill" />
                </IconCircle>
                <span>Compra simples e segura</span>
              </li>

              <li>
                <IconCircle circleColor="baseText">
                  <Package size={16} weight="fill" />
                </IconCircle>
                <span>Embalagem mantém o café intacto</span>
              </li>

              <li>
                <IconCircle circleColor="yellow">
                  <Timer size={16} weight="fill" />
                </IconCircle>
                <span>Entrega rápida e rastreada</span>
              </li>

              <li>
                <IconCircle circleColor="purple">
                  <Coffee size={16} weight="fill" />
                </IconCircle>
                <span>O café chega fresquinho até você</span>
              </li>
            </ul>
          </Content>

          <ImageContainer>
            <img
              src={heroImg}
              alt="Imagem de copo de café em um fundo amarelo"
            />
          </ImageContainer>
        </GridRow>
      </HeroSection>

      <CoffeeSection>
        <GridColumn>
          <h2>Nossos cafés</h2>

          <CoffeeList>
            {coffees.length > 0 &&
              coffees.map((coffee) => (
                <ProductCard key={coffee.id} coffeeData={coffee} />
              ))}
          </CoffeeList>
        </GridColumn>
      </CoffeeSection>
    </HomeContainer>
  )
}
