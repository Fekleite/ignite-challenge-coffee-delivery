import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  width: 100%;

  padding: 6.5rem 0;
`

export const Grid = styled.div`
  width: 100%;
  max-width: 72rem;

  margin: 0 auto;
  padding: 0 1rem;

  form {
    padding: 2.5rem 0;

    display: flex;
    align-items: flex-start;
    gap: 2rem;
  }
`

export const Order = styled.div`
  width: 100%;
  max-width: 40rem;

  display: flex;
  flex-direction: column;
  gap: 12px;

  h3 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const OrderCard = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  padding: 2.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme['base-card']};
`

export const OrderCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  & > div {
    h4 {
      font-weight: 400;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};

      margin-bottom: 2px;
    }

    span {
      font-size: 0.875rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const FormInputs = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  input {
    padding: 0.75rem;
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;

    background: ${(props) => props.theme['base-input']};

    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};

    &:not(:placeholder-shown),
    &:focus {
      border: 1px solid ${(props) => props.theme['yellow-700']};
    }
  }
`

export const NormalInput = styled.input`
  width: 100%;
  max-width: 12.5rem;
`

export const FullInput = styled.input`
  width: 100%;
  max-width: 100%;
`

export const StretchInput = styled.input`
  flex: 1;
`

export const SmallInput = styled.input`
  width: 100%;
  max-width: 3.75rem;
`

export const PaymentMethods = styled.div`
  width: 100%;

  display: flex;
  gap: 12px;

  & > div {
    flex: 1;
  }

  input {
    appearance: none;
  }

  input:checked + label {
    background: ${(props) => props.theme['purple-300']};
    border: 1px solid ${(props) => props.theme['purple-500']};
  }

  input:not(:checked) + label:hover {
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['base-hover']};
      color: ${(props) => props.theme['base-subtitle']};

      svg {
        color: ${(props) => props.theme['purple-700']};
      }
    }
  }

  label {
    display: flex;
    align-items: center;
    gap: 12px;

    padding: 1rem;
    border-radius: 6px;

    background: ${(props) => props.theme['base-button']};
    border: 1px solid ${(props) => props.theme['base-button']};

    svg {
      color: ${(props) => props.theme['purple-500']};
    }

    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};
  }
`

export const Selected = styled.div`
  width: 100%;
  max-width: 28rem;

  display: flex;
  flex-direction: column;
  gap: 12px;

  h3 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const SelectedCard = styled.div`
  padding: 2.5rem;
  border-radius: 6px 44px;

  width: 100%;

  background: ${(props) => props.theme['base-card']};
`

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin-bottom: 1.5rem;
`

export const Footer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 24px;

  > button {
    padding: 0.75rem 0.5rem;
    border-radius: 6px;
    border: 0;

    background-color: ${(props) => props.theme['yellow-500']};

    font-weight: 700;
    font-size: 0.875rem;
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme.white};

    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['yellow-700']};
    }
  }
`

export const Summary = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 12px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    span:first-child {
      font-size: 0.875rem;
    }

    &:last-child {
      span {
        font-weight: 700;
        font-size: 20px;
        color: ${(props) => props.theme['base-subtitle']};
      }
    }
  }
`
