import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { ProductListCard } from './ProductListCard'

import {
  CheckoutContainer,
  FormInputs,
  Grid,
  Order,
  OrderCard,
  OrderCardHeader,
  Selected,
  FullInput,
  NormalInput,
  StretchInput,
  SmallInput,
  PaymentMethods,
  SelectedCard,
  ProductList,
  Footer,
  Summary,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <Grid>
        <form>
          <Order>
            <h3>Complete seu pedido</h3>

            <OrderCard>
              <OrderCardHeader>
                <MapPinLine size={22} color="#C47F17" />

                <div>
                  <h4>Endereço de Entrega</h4>
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
              </OrderCardHeader>

              <FormInputs>
                <NormalInput type="text" placeholder="CEP" />
                <FullInput type="text" placeholder="Rua" />
                <NormalInput type="text" placeholder="Número" />
                <StretchInput type="text" placeholder="Complemento" />
                <NormalInput type="text" placeholder="Bairro" />
                <StretchInput type="text" placeholder="Cidade" />
                <SmallInput type="text" placeholder="UF" />
              </FormInputs>
            </OrderCard>

            <OrderCard>
              <OrderCardHeader>
                <CurrencyDollar size={22} color="#8047F8" />

                <div>
                  <h4>Pagamento</h4>
                  <span>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </span>
                </div>
              </OrderCardHeader>

              <PaymentMethods>
                <div>
                  <input type="radio" id="creditCard" name="paymentMethod" />
                  <label htmlFor="creditCard">
                    <CreditCard size={16} />
                    Cartão de crédito
                  </label>
                </div>

                <div>
                  <input type="radio" id="debitCard" name="paymentMethod" />
                  <label htmlFor="debitCard">
                    <Bank size={16} />
                    Cartão de débito
                  </label>
                </div>

                <div>
                  <input type="radio" id="money" name="paymentMethod" />
                  <label htmlFor="money">
                    <Money size={16} />
                    dinheiro
                  </label>
                </div>
              </PaymentMethods>
            </OrderCard>
          </Order>

          <Selected>
            <h3>Cafés selecionados</h3>

            <SelectedCard>
              <ProductList>
                <ProductListCard />

                <ProductListCard />
              </ProductList>

              <Footer>
                <Summary>
                  <div className="subtotal">
                    <span>Total de itens</span>

                    <span>R$ 29,70</span>
                  </div>

                  <div className="shipping">
                    <span>Entrega</span>

                    <span>R$ 3,50</span>
                  </div>

                  <div className="total">
                    <span>Total</span>

                    <span>R$ 33,20</span>
                  </div>
                </Summary>

                <button type="submit">Confirmar pedido</button>
              </Footer>
            </SelectedCard>
          </Selected>
        </form>
      </Grid>
    </CheckoutContainer>
  )
}
