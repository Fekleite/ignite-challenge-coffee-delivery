import styled from 'styled-components'

interface CartProps {
  isFull: boolean
}

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.background};

  padding: 2rem 0;
`

export const Grid = styled.div`
  width: 100%;
  max-width: 72rem;

  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Actions = styled.div`
  display: flex;
  gap: 12px;
`

export const Cart = styled.div<CartProps>`
  position: relative;

  a {
    border: 0;
    border-radius: 6px;
    padding: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => props.theme['yellow-300']};
    color: ${(props) => props.theme['yellow-700']};

    cursor: pointer;
  }

  span {
    display: ${(props) => (props.isFull ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;

    border-radius: 50%;

    background-color: ${(props) => props.theme['yellow-700']};
    color: ${(props) => props.theme.white};

    font-size: 0.75rem;
    font-weight: 700;

    position: absolute;
    top: -8px;
    right: -8px;

    pointer-events: none;
  }
`

export const Location = styled.div`
  border-radius: 6px;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  background-color: ${(props) => props.theme['purple-300']};
  color: ${(props) => props.theme['purple-500']};

  span {
    font-size: 0.875rem;

    color: ${(props) => props.theme['purple-700']};
  }
`
