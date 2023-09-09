import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logoImg from '../../assets/logo.svg'

import { CartItemsContext } from '../../contexts/CartItemsContext'

import { Actions, Grid, HeaderContainer, Location, Cart } from './styles'

export function Header() {
  const { totalCartItems } = useContext(CartItemsContext)

  return (
    <HeaderContainer>
      <Grid>
        <Link to="/">
          <img src={logoImg} alt="Coffee Delivery" />
        </Link>

        <Actions>
          <Location>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </Location>

          <Cart isFull={true}>
            <Link to="/checkout">
              <ShoppingCart size={22} weight="fill" />
            </Link>

            <span>{totalCartItems}</span>
          </Cart>
        </Actions>
      </Grid>
    </HeaderContainer>
  )
}
