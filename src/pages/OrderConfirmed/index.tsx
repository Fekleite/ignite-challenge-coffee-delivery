import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

import shippingImg from '../../assets/delivery-illustration.svg'

import {
  Grid,
  IconCircle,
  OrderConfirmedContainer,
  Info,
  Illustration,
} from './styles'

export function OrderConfirmed() {
  return (
    <OrderConfirmedContainer>
      <Grid>
        <Info>
          <h2>Uhu! Pedido confirmado</h2>

          <span>Agora é só aguardar que logo o café chegará até você</span>

          <ul>
            <li>
              <IconCircle circleColor="purple">
                <MapPin size={16} weight="fill" />
              </IconCircle>

              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
              </span>
            </li>

            <li>
              <IconCircle circleColor="yellow">
                <Timer size={16} weight="fill" />
              </IconCircle>

              <span>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </span>
            </li>

            <li>
              <IconCircle circleColor="yellowDark">
                <CurrencyDollar size={16} weight="fill" />
              </IconCircle>

              <span>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </span>
            </li>
          </ul>
        </Info>

        <Illustration>
          <img
            src={shippingImg}
            alt="Imagem de um homem dirigindo uma moto com a entrega"
          />
        </Illustration>
      </Grid>
    </OrderConfirmedContainer>
  )
}
