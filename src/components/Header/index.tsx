import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logoImg from '../../assets/logo.svg'

import { Actions, Grid, HeaderContainer, Location, Cart } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Grid>
        <img src={logoImg} alt="Coffee Delivery" />

        <Actions>
          <Location>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </Location>

          <Cart isFull={true}>
            <Link to="/cart">
              <ShoppingCart size={22} weight="fill" />
            </Link>

            <span>3</span>
          </Cart>
        </Actions>
      </Grid>
    </HeaderContainer>
  )
}
