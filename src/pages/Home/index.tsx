import { Package, ShoppingCart, Timer, Coffee } from 'phosphor-react'

import heroImg from '../../assets/hero-image.png'

import {
  HomeContainer,
  HeroSection,
  Grid,
  Content,
  IconCircle,
  ImageContainer,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HeroSection>
        <Grid>
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
        </Grid>
      </HeroSection>
    </HomeContainer>
  )
}
